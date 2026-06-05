"use client";

import Image from "next/image";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface Cta {
  label: string;
  href: string;
  target?: string;
}

interface HeaderProps {
  navLinks: NavLink[];
  activePath?: string;
  cta: Cta;
  showAvatar?: boolean;
}

export function Header({ navLinks, activePath, cta, showAvatar }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f5f3f1]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-xl font-semibold text-[#2d2d2d]">
            AM
          </div>
          <span className="text-lg font-semibold tracking-[0.2em] text-[#2d2d2d]">ANA.</span>
        </Link>

        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-[0.2em] text-[#6b6b6b] md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === activePath;
            const className = `transition-colors ${isActive ? "text-[#1a1a1a]" : "hover:text-[#1a1a1a]"}`;
            return link.href.startsWith("#") ? (
              <a key={link.href} href={link.href} className={className}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {showAvatar && (
            <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/10 md:flex">
              <Image
                src="/profile.png"
                width={40}
                height={40}
                className="rounded-full object-cover"
                alt="Portrait of Ana Carolina"
              />
            </div>
          )}
          <Link
            href={cta.href}
            target={cta.target}
            className="rounded-full bg-[#1a1a1a] px-5 py-2 text-sm font-semibold text-[#f5f3f1] transition hover:bg-[#2d2d2d]"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
