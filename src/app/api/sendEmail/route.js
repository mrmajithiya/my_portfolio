import nodemailer from "nodemailer";
import { z } from "zod";

const emailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    const result = emailSchema.parse({ name, email, subject, message });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Website Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
