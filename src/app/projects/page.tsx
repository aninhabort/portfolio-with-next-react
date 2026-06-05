"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { EXPERTISE_CHIPS, PROJECT_ARCHIVE, PROJECT_FILTERS, PROJECTS_NAV_LINKS } from "@/content/projects/archive";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(PROJECT_FILTERS[0]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECT_ARCHIVE;
    return PROJECT_ARCHIVE.filter((p) =>
      p.category.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-transparent text-[#2d2d2d]">
      <Header
        navLinks={PROJECTS_NAV_LINKS}
        activePath="/projects"
        cta={{ label: "Resume", href: "/CV-of-Ana-Carolina.pdf", target: "_blank" }}
      />

      <main className="mx-auto flex max-w-[1200px] flex-col px-6 pb-24 pt-32">
        <section className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-[#6b6b6b]">Projects</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Projects <span className="text-[#1a1a1a]">Archive</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base text-[#6b6b6b]">
              A complete archive of my design work, from product design and branding to web applications and content experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                disabled={filter === activeFilter}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  filter === activeFilter
                    ? "border-black/20 bg-black/[0.06] text-[#1a1a1a]"
                    : "border-black/10 bg-[#f5f3f1] text-[#6b6b6b] hover:border-black/30 hover:text-[#2d2d2d]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} variant="archive" />
          ))}
        </section>

        <section id="expertise" className="space-y-6 mt-12">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Toolkit</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#2d2d2d]">Expertise</h2>
            <p className="mt-2 max-w-2xl text-[#6b6b6b]">
              Design-first tools and technologies I use to bring ideas from concept to screen.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {EXPERTISE_CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-black/10 bg-black/[0.03] px-5 py-2 text-sm font-medium text-[#2d2d2d]"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section
          id="collaborate"
          className="rounded-[32px] border border-black/5 bg-[#f5f3f1] p-10 mt-12 shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Collaborate</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#2d2d2d]">
            Let&apos;s <span className="text-[#1a1a1a]">Collaborate</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#6b6b6b]">
            Looking for a Product Designer who understands the full product lifecycle? I&apos;d love to hear about your project.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-[#f5f3f1] transition hover:bg-[#2d2d2d]"
            >
              Get in Touch
            </Link>
            <a
              href="https://dribbble.com/aninhabort"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#2d2d2d] transition hover:border-black/30 hover:text-[#1a1a1a]"
            >
              View Dribbble
            </a>
          </div>
        </section>
      </main>

      <Footer tagline="Based in Coimbra, Portugal" />
    </div>
  );
}
