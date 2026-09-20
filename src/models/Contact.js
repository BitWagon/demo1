import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
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
      trim: true,
      maxlength: [30, "Phone number cannot exceed 30 characters."],
      default: "",
    },

    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      minlength: [5, "Message must contain at least 5 characters."],
      maxlength: [5000, "Message cannot exceed 5000 characters."],
    },

    status: {
      type: String,
      enum: {
        values: ["new", "read", "replied", "closed"],
        message: "Invalid contact status.",
      },
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

/*
 * Prevent Mongoose from creating the model again
 * during Next.js development / hot reload.
 */
const Contact =
  mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);

export default Contact;