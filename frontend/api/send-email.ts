import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: Request) {
    if (request.method !== "POST") {
        return Response.json(
            { message: "Method not allowed" },
            { status: 405 }
        );
    }

    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                { message: "All fields are required." },
                { status: 400 }
            );
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

            return Response.json(
                { message: "Failed to send email." },
                { status: 500 }
            );
        }

        console.log("Email sent:", data?.id);

        return Response.json(
            {
                message: "Email sent successfully.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Server error:", error);

        return Response.json(
            { message: "Something went wrong." },
            { status: 500 }
        );
    }
}