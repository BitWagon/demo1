import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    business: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },

    service: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "in-progress",
        "completed",
        "rejected",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Quote ||
  mongoose.model("Quote", QuoteSchema);