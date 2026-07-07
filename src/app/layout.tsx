import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMAM ESTUDIO | Shopify Lead Expert & Systems Architect",
  description: "Elite Personal Brand, Premium Portfolio, Digital Agency, and Freelancer Marketplace platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-black text-[#e3e2e2] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
