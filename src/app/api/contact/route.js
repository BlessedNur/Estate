import nodemailer from "nodemailer";

export async function POST(req) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  };

  try {
    const { name, email, phone, message } = await req.json();

    // Validate required environment variables
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.ADMIN_EMAIL
    ) {
      throw new Error("Missing required environment variables");
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminEmailContent = `
      <h2>New Contact Form Submission</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Message:</strong></li>
        <p>${message}</p>
      </ul>
    `;

    // Email to user (confirmation)
    const userEmailContent = `
      <h2>Thank You for Reaching Out!</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you shortly.</p>
      <p><strong>Your Message:</strong></p>
      <blockquote>${message}</blockquote>
      <p>Best regards,<br>Homes On Wheels Support Team</p>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Submission from ${name}`,
      html: adminEmailContent,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank You for Contacting Us",
      html: userEmailContent,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { headers, status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers, status: 500 }
    );
  }
}
