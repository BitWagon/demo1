import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";

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
     * Check request body.
     */
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Invalid request body.",
      });
    }

    /*
     * Read values sent by the quote form.
     *
     * These names match the existing frontend:
     * name
     * email
     * phone
     * businessName
     * service
     * postcode
     * message
     */
    const {
      name = "",
      email = "",
      phone = "",
      businessName = "",
      service = "",
      postcode = "",
      message = "",
    } = req.body;

    /*
     * Clean the submitted values.
     */
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPhone = String(phone).trim();
    const cleanBusinessName = String(businessName).trim();
    const cleanService = String(service).trim();
    const cleanPostcode = String(postcode).trim();
    const cleanMessage = String(message).trim();

    /*
     * Name validation.
     */
    if (!cleanName) {
      return res.status(400).json({
        success: false,
        message: "Please enter your name.",
      });
    }

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
    if (!cleanEmail) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email address.",
      });
    }

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
     * Phone validation.
     */
    if (!cleanPhone) {
      return res.status(400).json({
        success: false,
        message: "Please enter your phone number.",
      });
    }

    if (cleanPhone.length < 7) {
      return res.status(400).json({
        success: false,
        message: "Your phone number is too short.",
      });
    }

    if (cleanPhone.length > 30) {
      return res.status(400).json({
        success: false,
        message: "Your phone number is too long.",
      });
    }

    /*
     * Service validation.
     */
    if (!cleanService) {
      return res.status(400).json({
        success: false,
        message: "Please select a service.",
      });
    }

    if (cleanService.length > 150) {
      return res.status(400).json({
        success: false,
        message: "The selected service is too long.",
      });
    }

    /*
     * Optional business name.
     */
    if (cleanBusinessName.length > 200) {
      return res.status(400).json({
        success: false,
        message: "Business name is too long.",
      });
    }

    /*
     * Optional postcode.
     */
    if (cleanPostcode.length > 20) {
      return res.status(400).json({
        success: false,
        message: "Postcode is too long.",
      });
    }

    /*
     * Optional message.
     */
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
     * Create the quote.
     */
    const quote = await Quote.create({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      businessName: cleanBusinessName,
      service: cleanService,
      postcode: cleanPostcode,
      message: cleanMessage,
      status: "new",
    });

    /*
     * Return successful response.
     */
    return res.status(201).json({
      success: true,
      message: "Your quote request has been submitted successfully.",
      quoteId: quote._id.toString(),
    });
  } catch (error) {
    /*
     * Log the complete backend error.
     */
    console.error("=================================");
    console.error("QUOTE API ERROR");
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
        "Unable to save your quote request right now. Please try again later.",
    });
  }
}