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
    <div className="min-h-screen bg-transparent text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#04070f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-xl font-semibold text-cyan-300">
              AM
            </div>
            <span className="text-lg font-semibold tracking-[0.2em] text-slate-200">
              ANA.
            </span>
          </div>

          <nav className="hidden gap-8 text-sm font-medium uppercase tracking-[0.2em] text-slate-200 md:flex">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 md:flex">
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
              className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1200px] flex-col gap-24 px-6 pb-24 pt-32">
        <section id="hero" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-cyan-200">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.6em] text-slate-400">
                Product Designer & Frontend Developer
              </p>
              <h1 className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl">
                Ana Carolina <span className="text-cyan-300">Magalhães</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                I&apos;m a Product Designer with a background in Architecture and experience in Frontend Development. I bridge the gap between design and code, creating functional and beautiful interfaces that are built to work.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
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
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.4em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative isolate rounded-[24px] border border-white/10 bg-gradient-to-b from-[#0d1c29] via-[#0a1520] to-[#050910] p-6 shadow-2xl">
            <div className="absolute inset-0 -z-10 rounded-[24px] bg-gradient-to-r from-cyan-400/30 via-transparent to-purple-500/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between rounded-[20px] border border-white/5 bg-white/5 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Currently crafting</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">User-centered digital products</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Bridging the gap between design and code to build scalable digital products.
                </p>
              </div>
              <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#030712] p-4 shadow-xl">
                <div className="absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
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
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Featured</p>
              <h2 className="mt-2 text-4xl font-semibold text-white">Selected Projects</h2>
              <p className="mt-2 text-slate-300">
                Selected web applications and open-source contributions designed for performance, scale, and user delight.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0d1623] p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/60"
              >
                <div className="relative mb-5 h-36 overflow-hidden rounded-2xl border border-white/10">
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
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">{project.category}</p>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
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
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white"
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
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Toolkit</p>
            <h2 className="mt-2 text-4xl font-semibold text-white">Expertise</h2>
            <p className="mt-2 text-slate-300">
              Continuously evolving skill set focused on performance, accessibility, and storytelling across mediums.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {EXPERTISE.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="content" className="space-y-8 scroll-mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Storytelling</p>
            <h2 className="mt-2 text-4xl font-semibold text-white">Beyond Code</h2>
            <p className="mt-2 text-slate-300">
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
                className={`flex items-center gap-4 rounded-3xl border ${accent} bg-[#101828] p-6 transition hover:-translate-y-1`}
              >
                <div className="flex p-4 items-center justify-center rounded-2xl bg-white/5">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="text-sm text-slate-300">{description}</p>
                  <p className="mt-2 text-sm font-semibold text-cyan-300">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-8 rounded-[32px] border border-white/10 bg-[#0b131f]/80 p-10 shadow-2xl scroll-mt-32 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Collaborate</p>
            <h2 className="text-4xl font-semibold text-white">
              Start a Conversation
            </h2>
            <p className="text-slate-300">
              Have a project in mind or want to collaborate on content? Drop me a message and let&apos;s build something extraordinary.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <EnvelopeSimple size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Email</p>
                  <a href={`mailto:${CONTACT_SUMMARY.email}`} className="text-lg font-semibold text-white">
                    {CONTACT_SUMMARY.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Location</p>
                  <p className="text-lg font-semibold text-white">{CONTACT_SUMMARY.location}</p>
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {status === "success" && (
              <p className="rounded-2xl border border-green-400/60 bg-green-400/10 px-4 py-3 text-sm text-green-200">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-2xl border border-red-400/60 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                Something went wrong. Please try again.
              </p>
            )}
            {status === "empty" && (
              <p className="rounded-2xl border border-yellow-400/60 bg-yellow-400/10 px-4 py-3 text-sm text-yellow-100">
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
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
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
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
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="Tell me about your idea"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 py-4 text-base font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© Ana Carolina B. de Magalhães · {new Date().getFullYear()}</p>
          <div className="flex items-center gap-3 text-slate-500">
            <span>Built with React & Passion</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
