"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowUpRight, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import {
  CONTENT_CARDS,
  CONTACT_SUMMARY,
  EXPERTISE,
  FEATURED_PROJECTS,
  HERO_STATS,
  NAV_LINKS,
  SOCIALS,
} from "@/content/home/data";

type FormStatus = "idle" | "loading" | "success" | "error" | "empty";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Page() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("empty");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const payload = await response.json();

      if (payload?.message) {
        setStatus("success");
        setFormData(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-[#2d2d2d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f5f3f1]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-xl font-semibold text-[#2d2d2d]">
              AM
            </div>
            <span className="text-lg font-semibold tracking-[0.2em] text-[#2d2d2d]">
              ANA.
            </span>
          </div>

          <nav className="hidden gap-8 text-sm font-medium uppercase tracking-[0.2em] text-[#6b6b6b] md:flex">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#1a1a1a]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#1a1a1a]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/10 md:flex">
              <Image
                src="/profile.png"
                width={40}
                height={40}
                className="rounded-full object-cover"
                alt="Portrait of Ana Carolina"
              />
            </div>
            <Link
              href="#contact"
              className="rounded-full bg-[#1a1a1a] px-5 py-2 text-sm font-semibold text-[#f5f3f1] transition hover:bg-[#2d2d2d]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1200px] flex-col gap-24 px-6 pb-24 pt-32">
        <section id="hero" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[#6b6b6b]">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.6em] text-[#6b6b6b]">
                Product Designer & Frontend Developer
              </p>
              <h1 className="mt-4 text-5xl font-bold leading-tight text-[#2d2d2d] sm:text-6xl">
                Ana Carolina <span className="text-[#1a1a1a]">Magalhães</span>
              </h1>
              <p className="mt-6 text-lg text-[#6b6b6b]">
                I&apos;m a Product Designer with a background in Architecture and experience in Frontend Development. I bridge the gap between design and code, creating functional and beautiful interfaces that are built to work.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-[#f5f3f1] transition hover:bg-[#2d2d2d]"
              >
                Explore Projects
                <ArrowUpRight size={18} />
              </Link>
              {/* <Link
                href="#content"
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                View Roadmap
                <ArrowUpRight size={18} />
              </Link> */}
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/5 bg-[#f5f3f1] p-4 text-center">
                  <p className="text-3xl font-semibold text-[#2d2d2d]">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative isolate rounded-[24px] border border-black/5 bg-[#f5f3f1] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <div className="relative flex h-full flex-col justify-between rounded-[20px] border border-black/5 bg-[#ece8e4] p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Currently crafting</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#2d2d2d]">User-centered digital products</h3>
                <p className="mt-3 text-sm text-[#6b6b6b]">
                  Bridging the gap between design and code to build scalable digital products.
                </p>
              </div>
              <div className="relative mt-10 overflow-hidden rounded-2xl border border-black/10 bg-[#e2ddd8] p-4 shadow-sm">
                <Image
                  src="/profile.png"
                  alt="Ana coding on a laptop"
                  width={420}
                  height={320}
                  className="relative mx-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-10 scroll-mt-32">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Featured</p>
              <h2 className="mt-2 text-4xl font-semibold text-[#2d2d2d]">Selected Projects</h2>
              <p className="mt-2 text-[#6b6b6b]">
                Selected web applications and open-source contributions designed for performance, scale, and user delight.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-[#2d2d2d] transition hover:border-black/30 hover:text-[#1a1a1a]"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="group relative flex h-full flex-col rounded-3xl border border-black/5 bg-[#f5f3f1] p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/20"
              >
                <div className="relative mb-6 h-36 overflow-hidden rounded-2xl border border-black/10">
                  {project.previewImage ? (
                    <Image
                      src={project.previewImage}
                      alt={`${project.title} live preview`}
                      fill
                      sizes="(min-width: 768px) 320px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${project.accent}`}></div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#6b6b6b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 mb-1 text-2xl font-semibold text-[#2d2d2d]">{project.title}</h3>
                <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">{project.category}</p>
                <p className="mt-3 text-sm text-[#6b6b6b]">{project.description}</p>
                <div className="mt-auto pt-5 flex flex-wrap items-center gap-4 text-sm font-semibold">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#2d2d2d]"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#6b6b6b] hover:text-[#2d2d2d]"
                  >
                    Code
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="space-y-6 scroll-mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Toolkit</p>
            <h2 className="mt-2 text-4xl font-semibold text-[#2d2d2d]">Expertise</h2>
            <p className="mt-2 text-[#6b6b6b]">
              Continuously evolving skill set focused on performance, accessibility, and storytelling across mediums.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {EXPERTISE.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-black/[0.03] px-5 py-2 text-sm font-medium text-[#2d2d2d]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="content" className="space-y-8 scroll-mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Storytelling</p>
            <h2 className="mt-2 text-4xl font-semibold text-[#2d2d2d]">Beyond Code</h2>
            <p className="mt-2 text-[#6b6b6b]">
              My creative process bridges the gap between logic and aesthetics. I use Instagram to share software engineering insights and development fundamentals, while reserving Dribbble to showcase UI design for web and mobile, alongside broader visual explorations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CONTENT_CARDS.map(({ title, description, handle, href, accent, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 rounded-3xl border ${accent} bg-[#f5f3f1] p-6 transition hover:-translate-y-1`}
              >
                <div className="flex p-4 items-center justify-center rounded-2xl bg-black/[0.03] text-[#2d2d2d]">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2d2d2d]">{title}</h3>
                  <p className="text-sm text-[#6b6b6b]">{description}</p>
                  <p className="mt-2 text-sm font-semibold text-[#1a1a1a]">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-8 rounded-[32px] border border-black/5 bg-[#f5f3f1] p-10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] scroll-mt-32 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Collaborate</p>
            <h2 className="text-4xl font-semibold text-[#2d2d2d]">
              Start a Conversation
            </h2>
            <p className="text-[#6b6b6b]">
              Have a project in mind or want to collaborate on content? Drop me a message and let&apos;s build something extraordinary.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-3">
                  <EnvelopeSimple size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">Email</p>
                  <a href={`mailto:${CONTACT_SUMMARY.email}`} className="text-lg font-semibold text-[#2d2d2d]">
                    {CONTACT_SUMMARY.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">Location</p>
                  <p className="text-lg font-semibold text-[#2d2d2d]">{CONTACT_SUMMARY.location}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-[#6b6b6b] transition hover:border-black/30 hover:text-[#1a1a1a]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {status === "success" && (
              <p className="rounded-2xl border border-green-700/25 bg-green-100 px-4 py-3 text-sm text-green-800">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-2xl border border-red-700/25 bg-red-100 px-4 py-3 text-sm text-red-800">
                Something went wrong. Please try again.
              </p>
            )}
            {status === "empty" && (
              <p className="rounded-2xl border border-amber-700/25 bg-amber-100 px-4 py-3 text-sm text-amber-900">
                Please fill in all the required fields.
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold">
                <span>Your Name</span>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 bg-[#eae6e2] px-4 py-3 text-[#2d2d2d] placeholder:text-[#6b6b6b] focus:border-black/30 focus:outline-none"
                  placeholder="Ana Carolina"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                <span>Your Email</span>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 bg-[#eae6e2] px-4 py-3 text-[#2d2d2d] placeholder:text-[#6b6b6b] focus:border-black/30 focus:outline-none"
                  placeholder="hello@anacarolina.dev"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              <span>Subject</span>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-2xl border border-black/10 bg-[#eae6e2] px-4 py-3 text-[#2d2d2d] placeholder:text-[#6b6b6b] focus:border-black/30 focus:outline-none"
                placeholder="Let&apos;s build something"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              <span>Your Message</span>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-2xl border border-black/10 bg-[#eae6e2] px-4 py-3 text-[#2d2d2d] placeholder:text-[#6b6b6b] focus:border-black/30 focus:outline-none"
                placeholder="Tell me about your idea"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1a1a1a] py-4 text-base font-semibold text-[#f5f3f1] transition hover:bg-[#2d2d2d] disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f5f3f1]/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-6 text-xs text-[#6b6b6b] sm:flex-row sm:items-center sm:justify-between">
          <p>© Ana Carolina B. de Magalhães · {new Date().getFullYear()}</p>
          <div className="flex items-center gap-3 text-[#6b6b6b]">
            <span>Built with React & Passion</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
