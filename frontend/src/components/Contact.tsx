function Contact() {
    return (
        <section id="contact" className="border-b border-white/10">
            <div className="mx-auto max-w-4xl px-6 py-24">

                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                        Contact
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                        Let's work together.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-white/50">
                        Have a project, opportunity, or idea you'd like to discuss?
                        Send me a message.
                    </p>
                </div>

                <form className="mt-12 space-y-6">

                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm text-white/60">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-white/30"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-white/60">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-white/30"
                            />
                        </div>

                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-white/60">
                            Subject
                        </label>

                        <input
                            type="text"
                            placeholder="What would you like to discuss?"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-white/30"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-white/60">
                            Message
                        </label>

                        <textarea
                            rows={6}
                            placeholder="Write your message..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-white/30"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-white/80"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </section>
    );
}

export default Contact;