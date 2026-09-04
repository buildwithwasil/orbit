import { FormEvent, useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("sending");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to send email.");
            }

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="border-b border-black/10 dark:border-white/10"
        >
            <div className="mx-auto max-w-4xl px-6 py-24">

                {/* Header */}
                <div className="text-center">

                    <p className="text-sm uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                        Contact
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
                        Let's work together.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-black/50 dark:text-white/50">
                        Have a project, opportunity, or idea you'd like to discuss?
                        Send me a message.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-12 space-y-6"
                >

                    {/* Name + Email */}
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm text-black/60 dark:text-white/60"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-black outline-none transition placeholder:text-black/30 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/30 dark:focus:border-white/30"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm text-black/60 dark:text-white/60"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-black outline-none transition placeholder:text-black/30 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/30 dark:focus:border-white/30"
                            />
                        </div>

                    </div>

                    {/* Subject */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-2 block text-sm text-black/60 dark:text-white/60"
                        >
                            Subject
                        </label>

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What would you like to discuss?"
                            className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-black outline-none transition placeholder:text-black/30 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/30 dark:focus:border-white/30"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="mb-2 block text-sm text-black/60 dark:text-white/60"
                        >
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className="w-full resize-none rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-black outline-none transition placeholder:text-black/30 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/30 dark:focus:border-white/30"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/80"
                    >
                        {status === "sending"
                            ? "Sending..."
                            : "Send Message"}
                    </button>

                    {/* Status */}
                    {status === "success" && (
                        <p className="text-sm text-black/70 dark:text-white/70">
                            Message sent successfully. I'll get back to you soon.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-sm text-black/70 dark:text-white/70">
                            Something went wrong. Please try again.
                        </p>
                    )}

                </form>
            </div>
        </section>
    );
}

export default Contact;