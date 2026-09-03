import connectDB from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const { email } = req.body || {};

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email address is required.",
      });
    }

    const cleanEmail = String(email)
      .trim()
      .toLowerCase();

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    await connectDB();

    const existingSubscriber =
      await Newsletter.findOne({
        email: cleanEmail,
      });

    if (existingSubscriber) {
      if (
        existingSubscriber.status === "subscribed"
      ) {
        return res.status(409).json({
          success: false,
          message:
            "This email address is already subscribed.",
        });
      }

      existingSubscriber.status = "subscribed";

      await existingSubscriber.save();

      return res.status(200).json({
        success: true,
        message:
          "Your newsletter subscription has been restored.",
      });
    }

    await Newsletter.create({
      email: cleanEmail,
      status: "subscribed",
    });

    return res.status(201).json({
      success: true,
      message:
        "You have successfully subscribed to our newsletter.",
    });
  } catch (error) {
    console.error(
      "NEWSLETTER API ERROR:",
      error
    );

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message:
          "This email address is already subscribed.",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Unable to subscribe right now.",
    });
  }
}