import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
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
     * Check the admin session.
     *
     * This prevents normal website visitors from
     * accessing customer contact submissions.
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
     * Get all contact submissions.
     *
     * Newest submissions appear first.
     */
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .lean();

    /*
     * Convert MongoDB documents into JSON-safe data.
     */
    const formattedContacts = contacts.map((contact) => ({
      id: contact._id.toString(),
      name: contact.name,
      email: contact.email,
      phone: contact.phone || "",
      message: contact.message,
      status: contact.status || "new",
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    }));

    return res.status(200).json({
      success: true,
      count: formattedContacts.length,
      contacts: formattedContacts,
    });
  } catch (error) {
    console.error("ADMIN CONTACTS API ERROR:", error);

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
        "Unable to load contact submissions right now.",
    });
  }
}