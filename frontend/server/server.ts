import express from "express";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config({ path: ".env.local" });

const app = express();
const PORT = 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());

app.post("/api/send-email", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        const { data, error } = await resend.emails.send({
            from: "Orbit Portfolio <onboarding@resend.dev>",
            to: ["wasil.ahmad786@gmail.com"],
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h2>New Portfolio Contact</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);

            return res.status(500).json({
                message: "Failed to send email.",
            });
        }

        console.log("Email sent:", data?.id);

        return res.status(200).json({
            message: "Email sent successfully.",
        });
    } catch (error) {
        console.error("Server error:", error);

        return res.status(500).json({
            message: "Something went wrong.",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Email server running on http://localhost:${PORT}`);
});