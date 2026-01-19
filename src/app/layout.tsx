import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sruthi Rvani",
  description: "Personal portfolio",
};

const navLinks = [
  { href: "/professional", label: "Professional" },
  { href: "/builder", label: "Builder" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "https://github.com", label: "GitHub", external: true },
  { href: "https://linkedin.com", label: "LinkedIn", external: true },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-2xl mx-auto px-6 my-8 bg-white rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <header className="pt-12 pb-8">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-neutral-500 hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </header>
          <main className="py-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
