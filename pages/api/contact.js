import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  /*
   * Only POST requests are allowed.
   */
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    /*
     * Make sure the request body exists.
     */
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Invalid request body.",
      });
    }

    /*
     * Get values from the frontend.
     */
    const {
      name = "",
      email = "",
      phone = "",
      message = "",
    } = req.body;

    /*
     * Convert everything to strings safely.
     */
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPhone = String(phone).trim();
    const cleanMessage = String(message).trim();

    /*
     * Required fields.
     */
    if (!cleanName) {
      return res.status(400).json({
        success: false,
        message: "Please enter your full name.",
      });
    }

    if (!cleanEmail) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email address.",
      });
    }

    if (!cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "Please enter your message.",
      });
    }

    /*
     * Name validation.
     */
    if (cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Your name must contain at least 2 characters.",
      });
    }

    if (cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Your name is too long.",
      });
    }

    /*
     * Email validation.
     */
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (cleanEmail.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Your email address is too long.",
      });
    }

    /*
     * Phone is optional.
     *
     * We intentionally do not use a strict phone regex here.
     * This allows common UK/international formats such as:
     *
     * +44 20 1234 5678
     * +92 300 1234567
     * 0300 1234567
     * 020-1234-5678
     */
    if (cleanPhone.length > 30) {
      return res.status(400).json({
        success: false,
        message: "Your phone number is too long.",
      });
    }

    /*
     * Message validation.
     */
    if (cleanMessage.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message with at least 5 characters.",
      });
    }

    if (cleanMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Your message is too long.",
      });
    }

    /*
     * Connect to MongoDB Atlas.
     */
    await connectDB();

    /*
     * Save contact enquiry to MongoDB.
     */
    const contact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage,
      status: "new",
    });

    /*
     * Successful response.
     */
    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      contactId: contact._id.toString(),
    });
  } catch (error) {
    /*
     * Always log the real backend error
     * in the terminal for debugging.
     */
    console.error("=================================");
    console.error("CONTACT API ERROR");
    console.error("Message:", error.message);
    console.error("Name:", error.name);
    console.error("Code:", error.code);
    console.error("=================================");

    /*
     * MongoDB connection/server errors.
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
     * Mongoose validation errors.
     */
    if (error.name === "ValidationError") {
      const validationMessages = Object.values(error.errors)
        .map((item) => item.message)
        .join(", ");

      return res.status(400).json({
        success: false,
        message:
          validationMessages || "Please check the submitted information.",
      });
    }

    /*
     * General server error.
     */
    return res.status(500).json({
      success: false,
      message:
        "Unable to save your message right now. Please try again later.",
    });
  }
}