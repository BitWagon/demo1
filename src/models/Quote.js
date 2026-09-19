import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters."],
      maxlength: [100, "Name cannot exceed 100 characters."],
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      maxlength: [150, "Email cannot exceed 150 characters."],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address.",
      ],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      minlength: [7, "Phone number is too short."],
      maxlength: [30, "Phone number cannot exceed 30 characters."],
    },

    businessName: {
      type: String,
      trim: true,
      maxlength: [200, "Business name cannot exceed 200 characters."],
      default: "",
    },

    service: {
      type: String,
      required: [true, "Service is required."],
      trim: true,
      maxlength: [150, "Service cannot exceed 150 characters."],
    },

    postcode: {
      type: String,
      trim: true,
      maxlength: [20, "Postcode cannot exceed 20 characters."],
      default: "",
    },

    message: {
      type: String,
      trim: true,
      maxlength: [5000, "Message cannot exceed 5000 characters."],
      default: "",
    },

    status: {
      type: String,
      enum: {
        values: ["new", "contacted", "quoted", "converted", "closed"],
        message: "Invalid quote status.",
      },
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

/*
 * Prevent Mongoose from creating the model
 * multiple times during Next.js development
 * and hot reload.
 */
const Quote =
  mongoose.models.Quote ||
  mongoose.model("Quote", QuoteSchema);

export default Quote;