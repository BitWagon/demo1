import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
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
      trim: true,
      maxlength: 30,
      default: "",
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
        "read",
        "replied",
        "resolved",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);