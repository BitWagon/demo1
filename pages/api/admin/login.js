import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

import connectDB from "@/lib/mongodb";
import AdminLoginPage from "@/app/admin/login/page";

const ADMIN_COOKIE_NAME =
  "brand_admin_session";

const COOKIE_MAX_AGE = 60 * 60 * 24;

/*
 * Admin login API
 *
 * POST /api/admin/login
 */
export default async function handler(req, res) {
  /*
   * Only POST is allowed.
   */
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    /*
     * Read login information.
     */
    const { email, password } =
      req.body || {};

    /*
     * Validate input.
     */
    if (
      !email ||
      typeof email !== "string" ||
      !password ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required.",
      });
    }

    /*
     * Connect to MongoDB.
     */
    await connectDB();

    /*
     * Find admin by email.
     */
    const admin = await Admin.findOne({
      email: email.trim().toLowerCase(),
    });

    /*
     * Do not reveal whether the email
     * exists in the database.
     */
    if (!admin) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      });
    }

    /*
     * Compare password with stored hash.
     */
    const passwordMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      });
    }

    /*
     * Make sure JWT secret exists.
     */
    if (!process.env.JWT_SECRET) {
      console.error(
        "ADMIN LOGIN ERROR: JWT_SECRET is missing."
      );

      return res.status(500).json({
        success: false,
        message:
          "Server authentication configuration is missing.",
      });
    }

    /*
     * Create admin JWT.
     */
    const token = jwt.sign(
      {
        adminId: admin._id.toString(),
        email: admin.email,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    /*
     * Store JWT inside an HTTP-only cookie.
     */
    const cookie = serialize(
      ADMIN_COOKIE_NAME,
      token,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
        maxAge: COOKIE_MAX_AGE,
      }
    );

    res.setHeader(
      "Set-Cookie",
      cookie
    );

    /*
     * Successful login.
     *
     * The frontend will automatically redirect
     * to /admin.
     */
    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
      admin: {
        id: admin._id.toString(),
        email: admin.email,
        role: "admin",
      },
    });
  } catch (error) {
    console.error(
      "ADMIN LOGIN ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to process admin login right now.",
    });
  }
}