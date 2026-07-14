import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName, lastName, email, phone,
      address1, address2, country, state, city, pincode,
      nameOnCertificate, course, amount, specialRequirements,
    } = body;

    if (!firstName || !lastName || !email || !phone || !course || !amount) {
      return NextResponse.json(
        { error: "First name, last name, email, phone, course, and amount are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const row = (label, value) =>
      value
        ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;width:40%;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${value}</td></tr>`
        : "";

    await transporter.sendMail({
      from: `"QuickLearn Systems Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "training@quicklearnsys.com",
      replyTo: email,
      subject: `New Registration: ${firstName} ${lastName} — ${course}`,
      html: `
        <h2 style="color:#2BA6D9;font-family:Arial,sans-serif;">New Course Registration</h2>
        <table style="border-collapse:collapse;width:100%;max-width:620px;font-family:Arial,sans-serif;font-size:14px;">
          <tr style="background:#f0f8ff;">
            <td colspan="2" style="padding:10px 12px;font-weight:bold;font-size:15px;color:#1a5276;">Personal Details</td>
          </tr>
          ${row("Name", `${firstName} ${lastName}`)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Address", [address1, address2].filter(Boolean).join(", "))}
          ${row("City / State", [city, state, pincode].filter(Boolean).join(", "))}
          ${row("Country", country)}
          <tr style="background:#f0f8ff;">
            <td colspan="2" style="padding:10px 12px;font-weight:bold;font-size:15px;color:#1a5276;">Course & Payment</td>
          </tr>
          ${row("Course", course)}
          ${row("Amount (INR)", `₹ ${Number(amount).toLocaleString("en-IN")}`)}
          ${row("Name on Certificate", nameOnCertificate)}
          ${row("Special Requirements", specialRequirements)}
        </table>
      `,
    });

    return NextResponse.json({ success: true, message: "Registration submitted successfully." });
  } catch (error) {
    console.error("Registration form error:", error);
    return NextResponse.json(
      { error: "Failed to submit registration. Please try again later." },
      { status: 500 }
    );
  }
}
