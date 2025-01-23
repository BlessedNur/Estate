import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const quoteData = await req.json();

    // Validate SMTP configuration
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.ADMIN_EMAIL
    ) {
      console.error("Missing SMTP configuration", {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_PORT: !!process.env.SMTP_PORT,
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
        ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
      });

      return NextResponse.json(
        { success: false, message: "Email configuration incomplete" },
        { status: 500 }
      );
    }

    // Create transporter with additional timeout and connection settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      connectionTimeout: 10000, // 10 seconds
      socketTimeout: 20000, // 20 seconds
    });

    // Verify transporter connection
    await new Promise((resolve, reject) => {
      transporter.verify((error) => {
        if (error) {
          console.error("Transporter verification failed:", error);
          reject(error);
        } else {
          resolve(true);
        }
      });
    });

    // Prepare email content
    const emailHtml = `
      <h2>New Tiny Home Quote Request</h2>
      <h3>Home Details:</h3>
      <ul>
        <li><strong>Home Type:</strong> ${quoteData.homeType}</li>
        <li><strong>Timeline:</strong> ${quoteData.timeline}</li>
        <li><strong>Payment Option:</strong> ${quoteData.payment}</li>
      </ul>
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${quoteData.name}</li>
        <li><strong>Email:</strong> ${quoteData.email}</li>
        <li><strong>Phone:</strong> ${quoteData.phone}</li>
        <li><strong>Location:</strong> ${quoteData.location}</li>
      </ul>
    `;

    // Send email with explicit error handling
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: process.env.SMTP_USER,
          to: process.env.ADMIN_EMAIL,
          subject: "New Tiny Home Quote Request",
          html: emailHtml,
        },
        (err, info) => {
          if (err) {
            console.error("Email send error:", err);
            reject(err);
          } else {
            console.log("Email sent:", info);
            resolve(info);
          }
        }
      );
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Comprehensive quote request error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process quote request",
        errorDetails: error.message,
      },
      { status: 500 }
    );
  }
}
