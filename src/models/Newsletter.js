import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
    },

    status: {
      type: String,
      enum: ["subscribed", "unsubscribed"],
      default: "subscribed",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Newsletter ||
  mongoose.model("Newsletter", NewsletterSchema);