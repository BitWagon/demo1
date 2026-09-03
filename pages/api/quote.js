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

    const cleanName = String(name).trim();
    const cleanBusiness = String(business).trim();
    const cleanEmail = String(email)
      .trim()
      .toLowerCase();
    const cleanPhone = String(phone).trim();
    const cleanService = String(service).trim();
    const cleanMessage = String(message).trim();

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!phoneRegex.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    if (cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter your full name.",
      });
    }

    if (cleanBusiness.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter your business name.",
      });
    }

    if (cleanService.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please select a service.",
      });
    }

    if (cleanMessage.length < 5) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide more information about your requirements.",
      });
    }

    await connectDB();

    const quote = await Quote.create({
      name: cleanName,
      business: cleanBusiness,
      email: cleanEmail,
      phone: cleanPhone,
      service: cleanService,
      message: cleanMessage,
      status: "new",
    });

    return res.status(201).json({
      success: true,
      message:
        "Your quote request has been submitted successfully.",
      quoteId: quote._id,
    });
  } catch (error) {
    console.error("QUOTE API ERROR:", error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to submit your quote request right now.",
    });
  }
}