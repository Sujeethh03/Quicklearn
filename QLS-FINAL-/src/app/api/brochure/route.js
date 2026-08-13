import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const BROCHURE_COOKIE = "ql_brochure";
const BROCHURE_PATH = "/quicklearn-professional-brochure.html";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, jobTitle, teamSize, interest, consent, website } = body;

    // Honeypot — bots fill hidden fields, humans never see them.
    if (website) {
      return NextResponse.json({ success: true, redirectTo: BROCHURE_PATH });
    }

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Please enter your name, email and phone number." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const row = (label, value) =>
      value
        ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">${label}</td><td style="padding:8px;border-bottom:1px solid #eee;">${value}</td></tr>`
        : "";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"QuickLearn Systems Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "training@quicklearnsys.com",
      replyTo: email,
      subject: `Brochure download — ${fullName}${company ? ` (${company})` : ""}`,
      html: `
        <h2>Corporate brochure downloaded</h2>
        <p style="color:#555;">This lead requested the corporate brochure from the website.</p>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          ${row("Name", fullName)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Company", company)}
          ${row("Job title", jobTitle)}
          ${row("Team size", teamSize)}
          ${row("Training interest", interest)}
          ${row("Marketing consent", consent ? "Yes — may be contacted about courses and offers" : "No")}
          ${row("Requested at", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST")}
        </table>
      `,
    });

    const response = NextResponse.json({ success: true, redirectTo: BROCHURE_PATH });

    // Unlocks the brochure for this browser; middleware checks for it.
    response.cookies.set(BROCHURE_COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 90, // 90 days — returning visitors skip the form
    });

    return response;
  } catch (error) {
    console.error("Brochure lead error:", error);
    return NextResponse.json(
      { error: "We could not send your request. Please try again or email training@quicklearnsys.com." },
      { status: 500 }
    );
  }
}
