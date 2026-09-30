import "./globals.css";

export const metadata = {
    title: "Wasil Ahmad | Software Engineer",
    description:
        "Portfolio of Wasil Ahmad — Software Engineer building scalable web applications, backend systems, and AI-powered solutions.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}