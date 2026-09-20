import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";
import { isAdminRequest } from "@/lib/adminAuth";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedStatuses = [
  "new",
  "contacted",
  "quoted",
  "converted",
  "closed",
];

export default async function handler(req, res) {
  try {
    /*
     * ============================================================
     * POST
     * Public quote form submission
     * ============================================================
     */
    if (req.method === "POST") {
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({
          success: false,
          message: "Invalid request body.",
        });
      }

      const {
        name = "",
        email = "",
        phone = "",
        business = "",
        businessName = "",
        service = "",
        postcode = "",
        message = "",
      } = req.body;

      /*
       * The existing frontend sends "business".
       * The database model uses "businessName".
       *
       * Support both names so the existing form
       * continues working correctly.
       */
      const cleanBusinessName = String(
        businessName || business
      ).trim();

      const cleanName = String(name).trim();
      const cleanEmail = String(email).trim().toLowerCase();
      const cleanPhone = String(phone).trim();
      const cleanService = String(service).trim();
      const cleanPostcode = String(postcode).trim();
      const cleanMessage = String(message).trim();

      /*
       * Name
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
          message:
            "Your name must contain at least 2 characters.",
        });
      }

      if (cleanName.length > 100) {
        return res.status(400).json({
          success: false,
          message: "Your name is too long.",
        });
      }

      /*
       * Email
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
       * Phone
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
       * Business name
       */
      if (cleanBusinessName.length > 200) {
        return res.status(400).json({
          success: false,
          message: "Business name is too long.",
        });
      }

      /*
       * Service
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
       * Postcode
       */
      if (cleanPostcode.length > 20) {
        return res.status(400).json({
          success: false,
          message: "Postcode is too long.",
        });
      }

      /*
       * Message
       */
      if (cleanMessage.length > 5000) {
        return res.status(400).json({
          success: false,
          message: "Your message is too long.",
        });
      }

      /*
       * MongoDB
       */
      await connectDB();

      /*
       * Create quote.
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

      return res.status(201).json({
        success: true,
        message:
          "Your quote request has been submitted successfully.",
        quoteId: quote._id.toString(),
      });
    }

    /*
     * ============================================================
     * GET
     * Admin quote list
     * ============================================================
     */
    if (req.method === "GET") {
      if (!isAdminRequest(req)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Admin access required.",
        });
      }

      await connectDB();

      const quotes = await Quote.find({})
        .sort({ createdAt: -1 })
        .lean();

      const formattedQuotes = quotes.map((quote) => ({
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
        updatedAt: quote.updatedAt,
      }));

      return res.status(200).json({
        success: true,
        count: formattedQuotes.length,
        quotes: formattedQuotes,
      });
    }

    /*
     * ============================================================
     * PATCH
     * Admin changes quote status
     * ============================================================
     */
    if (req.method === "PATCH") {
      if (!isAdminRequest(req)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Admin access required.",
        });
      }

      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({
          success: false,
          message: "Invalid request body.",
        });
      }

      const {
        id = "",
        status = "",
      } = req.body;

      const cleanId = String(id).trim();
      const cleanStatus = String(status)
        .trim()
        .toLowerCase();

      /*
       * Validate MongoDB ID.
       */
      if (
        !cleanId ||
        !mongoose.Types.ObjectId.isValid(cleanId)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid quote ID.",
        });
      }

      /*
       * Validate status.
       */
      if (!allowedStatuses.includes(cleanStatus)) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid status. Allowed statuses are: new, contacted, quoted, converted, closed.",
        });
      }

      await connectDB();

      const quote = await Quote.findByIdAndUpdate(
        cleanId,
        {
          status: cleanStatus,
        },
        {
          new: true,
          runValidators: true,
        }
      ).lean();

      if (!quote) {
        return res.status(404).json({
          success: false,
          message: "Quote not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Quote status updated successfully.",
        quote: {
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
          updatedAt: quote.updatedAt,
        },
      });
    }

    /*
     * ============================================================
     * DELETE
     * Admin deletes quote
     * ============================================================
     */
    if (req.method === "DELETE") {
      if (!isAdminRequest(req)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Admin access required.",
        });
      }

      const cleanId = String(
        req.query?.id || ""
      ).trim();

      if (
        !cleanId ||
        !mongoose.Types.ObjectId.isValid(cleanId)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid quote ID.",
        });
      }

      await connectDB();

      const deletedQuote =
        await Quote.findByIdAndDelete(cleanId);

      if (!deletedQuote) {
        return res.status(404).json({
          success: false,
          message: "Quote not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Quote deleted successfully.",
        quoteId: cleanId,
      });
    }

    /*
     * ============================================================
     * Unsupported method
     * ============================================================
     */
    res.setHeader(
      "Allow",
      ["GET", "POST", "PATCH", "DELETE"]
    );

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  } catch (error) {
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
      const validationMessages = Object.values(
        error.errors || {}
      )
        .map((item) => item.message)
        .join(", ");

      return res.status(400).json({
        success: false,
        message:
          validationMessages ||
          "Please check the submitted information.",
      });
    }

    /*
     * General server error.
     */
    return res.status(500).json({
      success: false,
      message:
        "Unable to process your quote request right now.",
    });
  }
}