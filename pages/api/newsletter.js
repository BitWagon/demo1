import connectDB from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

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
     * Validate request body.
     */
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Invalid request body.",
      });
    }

    /*
     * Get email from the newsletter form.
     */
    const { email = "" } = req.body;

    /*
     * Clean the email address.
     */
    const cleanEmail = String(email).trim().toLowerCase();

    /*
     * Required email validation.
     */
    if (!cleanEmail) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email address.",
      });
    }

    /*
     * Email format validation.
     */
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    /*
     * Maximum email length.
     */
    if (cleanEmail.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Your email address is too long.",
      });
    }

    /*
     * Connect to MongoDB Atlas.
     */
    await connectDB();

    /*
     * Check whether the email already exists.
     */
    const existingSubscriber = await Newsletter.findOne({
      email: cleanEmail,
    });

    /*
     * If already subscribed, don't create another document.
     */
    if (existingSubscriber) {
      /*
       * If the subscriber previously unsubscribed,
       * subscribe them again.
       */
      if (existingSubscriber.status === "unsubscribed") {
        existingSubscriber.status = "subscribed";
        await existingSubscriber.save();

        return res.status(200).json({
          success: true,
          message: "You have been subscribed to our newsletter again.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "This email is already subscribed to our newsletter.",
      });
    }

    /*
     * Create a new newsletter subscriber.
     */
    await Newsletter.create({
      email: cleanEmail,
      status: "subscribed",
    });

    /*
     * Successful response.
     */
    return res.status(201).json({
      success: true,
      message: "You have successfully subscribed to our newsletter.",
    });
  } catch (error) {
    /*
     * Log the complete backend error.
     */
    console.error("=================================");
    console.error("NEWSLETTER API ERROR");
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
     * Duplicate email protection.
     *
     * This also protects against a race condition where
     * two requests arrive at nearly the same time.
     */
    if (error.code === 11000) {
      return res.status(200).json({
        success: true,
        message: "This email is already subscribed to our newsletter.",
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
        "Unable to subscribe right now. Please try again later.",
    });
  }
}