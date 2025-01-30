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
    const { formData, product } = await req.json();

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

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format the email content with HTML
    const emailContent = `
      <h2>New Order Details</h2>
      
      <h3>Product Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${product.name}</li>
        <li><strong>Price:</strong> $${product.price}</li>
      </ul>
      
      <h3>Customer Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
      </ul>
      
      <h3>Delivery Address:</h3>
      <ul>
        <li><strong>Street:</strong> ${formData.street}</li>
        <li><strong>City:</strong> ${formData.city}</li>
        <li><strong>State:</strong> ${formData.state}</li>
        <li><strong>ZIP Code:</strong> ${formData.zipCode}</li>
      </ul>
      
      <h3>Payment Details:</h3>
      <ul>
        <li><strong>Payment Option:</strong> ${formData.paymentOption}</li>
        <li><strong>Payment Method:</strong> ${formData.paymentMethod}</li>
      </ul>
      
      ${
        formData.comments
          ? `
        <h3>Additional Comments:</h3>
        <p>${formData.comments}</p>
      `
          : ""
      }
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Order - ${product.name}`,
      html: emailContent,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: formData.email,
      subject: "Order Confirmation",
      html: `
        <h2>Thank you for your order!</h2>
        
        <p>We have received your order for ${product.name}.</p>
        <p>Our team will contact you shortly with further instructions.</p>
        
        <h3>Order Details:</h3>
        <ul>
          <li><strong>Payment Option:</strong> ${formData.paymentOption}</li>
          <li><strong>Delivery Address:</strong> ${formData.street}, ${formData.city}, ${formData.state} ${formData.zipCode}</li>
        </ul>
        
        <p>If you have any questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>Your Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email. Please try again later.",
      }),
      {
        status: 500,
        headers: headers,
      }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers":
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    },
  });
}
