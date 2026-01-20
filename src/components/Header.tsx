"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const modeLinks = [
  { href: "/professional", label: "Professional" },
  { href: "/builder", label: "Builder" },
];

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

const externalLinks = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Header() {
  const pathname = usePathname();

  const isActiveMode = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="pt-12 pb-8">
      <nav className="flex flex-col gap-4 text-sm">
        {/* Segmented mode toggle */}
        <div className="flex border border-neutral-200 rounded-md w-fit">
          {modeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 ${
                isActiveMode(link.href)
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              } first:rounded-l-md last:rounded-r-md`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Navigation and external links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="text-neutral-300">|</span>
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
