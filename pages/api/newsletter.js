import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { isAdminRequest } from "@/lib/adminAuth";

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  try {
    await connectDB();

    // ----------------------------------------
    // POST - Public newsletter subscription
    // ----------------------------------------
    if (req.method === "POST") {
      const email = normalizeEmail(req.body?.email);

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required.",
        });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address.",
        });
      }

      const existingSubscriber =
        await Newsletter.findOne({ email });

      if (existingSubscriber) {
        return res.status(200).json({
          success: true,
          message: "This email is already subscribed.",
          subscriber: {
            id: existingSubscriber._id.toString(),
            email: existingSubscriber.email,
          },
        });
      }

      const subscriber = await Newsletter.create({
        email,
      });

      return res.status(201).json({
        success: true,
        message: "Successfully subscribed.",
        subscriber: {
          id: subscriber._id.toString(),
          email: subscriber.email,
        },
      });
    }

    // ----------------------------------------
    // Admin authentication
    // ----------------------------------------
    const adminRequest = isAdminRequest(req);

    if (!adminRequest) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    // ----------------------------------------
    // GET - Admin newsletter subscribers
    // ----------------------------------------
    if (req.method === "GET") {
      const subscribers = await Newsletter.find({})
        .sort({ createdAt: -1 })
        .lean();

      return res.status(200).json({
        success: true,
        count: subscribers.length,
        subscribers: subscribers.map((subscriber) => ({
          id: subscriber._id.toString(),
          email: subscriber.email,
          createdAt: subscriber.createdAt,
          updatedAt: subscriber.updatedAt,
        })),
      });
    }

    // ----------------------------------------
    // DELETE - Admin delete subscriber
    // ----------------------------------------
    if (req.method === "DELETE") {
      const { id } = req.query;

      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          success: false,
          message: "A valid subscriber ID is required.",
        });
      }

      const subscriber =
        await Newsletter.findByIdAndDelete(id);

      if (!subscriber) {
        return res.status(404).json({
          success: false,
          message: "Subscriber not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Subscriber deleted successfully.",
      });
    }

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  } catch (error) {
    console.error(
      "NEWSLETTER API ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}