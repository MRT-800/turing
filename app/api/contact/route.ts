// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, mobile, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    // to: "Turing Research And Development <info@turingresearch.com.np>", // This is where you put your email
    to: "info@turingresearch.com.np", // This is where you put your email
    subject: `New contact from ${name}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p>      <p><strong>Mobile:</strong> ${mobile}</p><p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("1121");
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("222");

    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
