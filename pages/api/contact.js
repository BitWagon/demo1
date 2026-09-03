import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

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
      email,
      phone,
      message,
    } = req.body || {};

    if (!name || !email || !message) {
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

    if (
      phone &&
      !phoneRegex.test(String(phone).trim())
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    if (String(name).trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter your name.",
      });
    }

    if (String(message).trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: "Please provide a longer message.",
      });
    }

    await connectDB();

    const contact = await Contact.create({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "",
      message: String(message).trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      contactId: contact._id,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message right now.",
    });
  }
}