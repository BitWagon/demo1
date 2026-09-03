import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
  /^[0-9+()\s.-]{7,30}$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const {
      name,
      business,
      email,
      phone,
      service,
      message,
    } = req.body || {};

    if (
      !name ||
      !business ||
      !email ||
      !phone ||
      !service ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    if (!emailRegex.test(String(email).trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!phoneRegex.test(String(phone).trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    if (String(name).trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter your full name.",
      });
    }

    if (String(business).trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter your business name.",
      });
    }

    if (String(message).trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: "Please provide more information about your requirements.",
      });
    }

    await connectDB();

    const quote = await Quote.create({
      name: String(name).trim(),
      business: String(business).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      service: String(service).trim(),
      message: String(message).trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Your quote request has been submitted successfully.",
      quoteId: quote._id,
    });
  } catch (error) {
    console.error("QUOTE API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your quote request right now.",
    });
  }
}