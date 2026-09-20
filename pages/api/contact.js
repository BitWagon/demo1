import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { isAdminRequest } from "@/lib/adminAuth";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedStatuses = [
  "new",
  "read",
  "replied",
  "closed",
];

export default async function handler(req, res) {
  try {
    /*
     * ============================================================
     * POST
     * Public contact form submission
     * ============================================================
     */
    if (req.method === "POST") {
      /*
       * Validate request body.
       */
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
        message = "",
      } = req.body;

      /*
       * Clean submitted values.
       */
      const cleanName = String(name).trim();
      const cleanEmail = String(email).trim().toLowerCase();
      const cleanPhone = String(phone).trim();
      const cleanMessage = String(message).trim();

      /*
       * Validate name.
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
       * Validate email.
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
       * Validate phone.
       *
       * Phone is optional in your existing ContactForm.
       */
      if (cleanPhone.length > 30) {
        return res.status(400).json({
          success: false,
          message: "Your phone number is too long.",
        });
      }

      /*
       * Validate message.
       */
      if (!cleanMessage) {
        return res.status(400).json({
          success: false,
          message: "Please enter your message.",
        });
      }

      if (cleanMessage.length < 5) {
        return res.status(400).json({
          success: false,
          message:
            "Your message must contain at least 5 characters.",
        });
      }

      if (cleanMessage.length > 5000) {
        return res.status(400).json({
          success: false,
          message: "Your message is too long.",
        });
      }

      /*
       * Connect to MongoDB.
       */
      await connectDB();

      /*
       * Create contact.
       *
       * Every new contact starts with "new" status.
       */
      const contact = await Contact.create({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        message: cleanMessage,
        status: "new",
      });

      return res.status(201).json({
        success: true,
        message:
          "Your message has been sent successfully. We will get back to you shortly.",
        contactId: contact._id.toString(),
      });
    }

    /*
     * ============================================================
     * GET
     * Admin contact list
     * ============================================================
     */
    if (req.method === "GET") {
      /*
       * Only authenticated admins can read contacts.
       */
      if (!isAdminRequest(req)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Admin access required.",
        });
      }

      await connectDB();

      /*
       * Get newest contacts first.
       */
      const contacts = await Contact.find({})
        .sort({ createdAt: -1 })
        .lean();

      const formattedContacts = contacts.map(
        (contact) => ({
          id: contact._id.toString(),
          name: contact.name || "",
          email: contact.email || "",
          phone: contact.phone || "",
          message: contact.message || "",
          status: contact.status || "new",
          createdAt: contact.createdAt,
          updatedAt: contact.updatedAt,
        })
      );

      return res.status(200).json({
        success: true,
        count: formattedContacts.length,
        contacts: formattedContacts,
      });
    }

    /*
     * ============================================================
     * PATCH
     * Admin changes contact status
     * ============================================================
     */
    if (req.method === "PATCH") {
      /*
       * Only authenticated admins can update contacts.
       */
      if (!isAdminRequest(req)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Admin access required.",
        });
      }

      /*
       * Validate request body.
       */
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
      const cleanStatus = String(status).trim().toLowerCase();

      /*
       * Validate MongoDB ID.
       */
      if (
        !cleanId ||
        !mongoose.Types.ObjectId.isValid(cleanId)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid contact ID.",
        });
      }

      /*
       * Validate status.
       */
      if (!allowedStatuses.includes(cleanStatus)) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid status. Allowed statuses are: new, read, replied, closed.",
        });
      }

      await connectDB();

      /*
       * Update only the status.
       */
      const contact = await Contact.findByIdAndUpdate(
        cleanId,
        {
          status: cleanStatus,
        },
        {
          new: true,
          runValidators: true,
        }
      ).lean();

      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Contact status updated successfully.",
        contact: {
          id: contact._id.toString(),
          name: contact.name || "",
          email: contact.email || "",
          phone: contact.phone || "",
          message: contact.message || "",
          status: contact.status || "new",
          createdAt: contact.createdAt,
          updatedAt: contact.updatedAt,
        },
      });
    }

    /*
     * ============================================================
     * DELETE
     * Admin deletes a contact
     * ============================================================
     */
    if (req.method === "DELETE") {
      /*
       * Only authenticated admins can delete contacts.
       */
      if (!isAdminRequest(req)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Admin access required.",
        });
      }

      /*
       * Get ID from query:
       *
       * /api/contact?id=xxxxxxxx
       */
      const cleanId = String(
        req.query?.id || ""
      ).trim();

      /*
       * Validate MongoDB ID.
       */
      if (
        !cleanId ||
        !mongoose.Types.ObjectId.isValid(cleanId)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid contact ID.",
        });
      }

      await connectDB();

      /*
       * Delete the contact.
       */
      const deletedContact =
        await Contact.findByIdAndDelete(cleanId);

      if (!deletedContact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Contact deleted successfully.",
        contactId: cleanId,
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
    console.error("CONTACT API ERROR");
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
        "Unable to process your contact request right now.",
    });
  }
}