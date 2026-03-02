"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FigmaLogo, GithubLogo } from "@phosphor-icons/react";
import {
  EXPERTISE_CHIPS,
  PROJECT_ARCHIVE,
  PROJECT_FILTERS,
} from "@/content/projects/archive";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Collaborate", href: "#collaborate" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(PROJECT_FILTERS[0]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECT_ARCHIVE;
    }

    return PROJECT_ARCHIVE.filter((project) =>
      project.category.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#03060c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-xl font-semibold text-cyan-300">
              AM
            </div>
            <span className="text-lg font-semibold tracking-[0.2em] text-slate-200">
              ANA.
            </span>
          </Link>

          <nav className="hidden gap-8 text-sm font-medium uppercase tracking-[0.35em] text-slate-300 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors ${item.href === "/projects" ? "text-cyan-300" : "hover:text-cyan-300"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Link
            href="/CV-of-Ana-Carolina.pdf"
            target="_blank"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Resume
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1200px] flex-col gap-20 px-6 pb-24 pt-32">
        <section className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-cyan-200">Projects</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Projects <span className="text-cyan-300">Archive</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base text-slate-300">
              A detailed showcase of my technical journey, focusing on high-performance web applications and scalable architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  filter === activeFilter
                    ? "border-cyan-300/70 bg-cyan-300/15 text-cyan-200"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-white"
                }`}
                type="button"
                disabled={filter === activeFilter}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-[28px] border border-white/8 bg-[#0a1220]/90 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              <div className="relative mb-5 h-48 overflow-hidden rounded-2xl border border-white/10">
                {project.previewImage ? (
                  <Image
                    src={project.previewImage}
                    alt={`${project.title} live preview`}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`}></div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex-1">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-300 hover:text-white"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white"
                  >
                    Github
                    <GithubLogo size={16} />
                  </a>
                )}
                {project.designUrl && (
                  <a
                    href={project.designUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-pink-200 hover:text-white"
                  >
                    Design File
                    <FigmaLogo size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        <section id="expertise" className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Toolkit</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Expertise</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              My toolkit constantly evolves, focusing on tools that prioritize performance, scale, and developer experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {EXPERTISE_CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section
          id="collaborate"
          className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#08101f] via-[#071c2d] to-[#02060f] p-10 shadow-2xl"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Collaborate</p>
          <h2 className="mt-3 text-4xl font-semibold text-white">
            Let&apos;s <span className="text-cyan-300">Collaborate</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            Looking for a frontend specialist to elevate your project or need a technical consultant for your next big idea? My inbox is always open.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Get in Touch
            </Link>
            <a
              href="https://github.com/aninhabort"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              View Github
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© Ana Carolina B. de Magalhães · {new Date().getFullYear()}</p>
          <span>Based in Lisbon, Portugal</span>
        </div>
      </footer>
    </div>
  );
}
