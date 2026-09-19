import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email address is required."],
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: [150, "Email address cannot exceed 150 characters."],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address.",
      ],
    },

    status: {
      type: String,
      enum: {
        values: ["subscribed", "unsubscribed"],
        message: "Invalid newsletter status.",
      },
      default: "subscribed",
    },
  },
  {
    timestamps: true,
  }
);

/*
 * Prevent Mongoose from creating the model
 * more than once during Next.js development
 * and hot reload.
 */
const Newsletter =
  mongoose.models.Newsletter ||
  mongoose.model("Newsletter", NewsletterSchema);

export default Newsletter;