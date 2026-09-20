import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import Quote from "@/models/Quote";
import Newsletter from "@/models/Newsletter";
import { isAdminRequest } from "@/lib/adminAuth";

export default async function handler(req, res) {
  /*
   * Only GET requests are allowed.
   */
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    /*
     * Check admin authentication.
     *
     * This API must only be accessible to
     * authenticated administrators.
     */
    if (!isAdminRequest(req)) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Admin access required.",
      });
    }

    /*
     * Connect to MongoDB.
     */
    await connectDB();

    /*
     * Get dashboard information.
     *
     * All values come directly from MongoDB.
     */
    const [
      totalContacts,
      totalQuotes,
      totalSubscribers,
      newContacts,
      newQuotes,
      recentContacts,
      recentQuotes,
    ] = await Promise.all([
      /*
       * Total contact submissions.
       */
      Contact.countDocuments(),

      /*
       * Total quote requests.
       */
      Quote.countDocuments(),

      /*
       * Currently subscribed newsletter users.
       */
      Newsletter.countDocuments({
        status: "subscribed",
      }),

      /*
       * New contact enquiries.
       */
      Contact.countDocuments({
        status: "new",
      }),

      /*
       * New quote requests.
       */
      Quote.countDocuments({
        status: "new",
      }),

      /*
       * Five latest contact enquiries.
       */
      Contact.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .select(
          "name email phone message status createdAt"
        )
        .lean(),

      /*
       * Five latest quote requests.
       */
      Quote.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .select(
          "name email phone businessName service postcode message status createdAt"
        )
        .lean(),
    ]);

    /*
     * Format recent contacts.
     */
    const formattedContacts = recentContacts.map(
      (contact) => ({
        id: contact._id.toString(),
        name: contact.name || "",
        email: contact.email || "",
        phone: contact.phone || "",
        message: contact.message || "",
        status: contact.status || "new",
        createdAt: contact.createdAt,
      })
    );

    /*
     * Format recent quotes.
     */
    const formattedQuotes = recentQuotes.map(
      (quote) => ({
        id: quote._id.toString(),
        name: quote.name || "",
        email: quote.email || "",
        phone: quote.phone || "",
        businessName: quote.businessName || "",
        service: quote.service || "",
        postcode: quote.postcode || "",
        message: quote.message || "",
        status: quote.status || "new",
        createdAt: quote.createdAt,
      })
    );

    /*
     * Return dashboard data.
     */
    return res.status(200).json({
      success: true,

      statistics: {
        totalContacts,
        totalQuotes,
        totalSubscribers,

        /*
         * New enquiries means:
         * new contacts + new quotes.
         */
        newEnquiries: newContacts + newQuotes,

        /*
         * Keep individual counts available too.
         */
        newContacts,
        newQuotes,
      },

      recentContacts: formattedContacts,

      recentQuotes: formattedQuotes,
    });
  } catch (error) {
    /*
     * Log the complete backend error.
     */
    console.error("=================================");
    console.error("ADMIN DASHBOARD API ERROR");
    console.error("Message:", error.message);
    console.error("Name:", error.name);
    console.error("Code:", error.code);
    console.error("=================================");

    /*
     * MongoDB connection errors.
     */
    if (
      error.name === "MongooseServerSelectionError" ||
      error.name === "MongoServerSelectionError" ||
      error.name === "MongoNetworkError"
    ) {
      return res.status(503).json({
        success: false,
        message:
          "Database connection failed. Please check your MongoDB Atlas connection.",
      });
    }

    /*
     * General server error.
     */
    return res.status(500).json({
      success: false,
      message:
        "Unable to load dashboard data right now.",
    });
  }
}