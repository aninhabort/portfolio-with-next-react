"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowUpRight, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import {
  CONTACT_SUMMARY,
  CONTENT_CARDS,
  CURRENTLY_BUILDING,
  EXPERTISE,
  FEATURED_PROJECTS,
  HERO_STATS,
  HOW_I_CAN_HELP,
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
      <Header
        navLinks={NAV_LINKS}
        cta={{ label: "Get in Touch", href: "#contact" }}
        showAvatar
      />

      <main className="mx-auto flex max-w-[1200px] flex-col gap-24 px-6 pb-24 pt-32">
        <section id="hero" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[#6b6b6b]">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.6em] text-[#6b6b6b]">
                Product Designer & Content Creator
              </p>
              <h1 className="mt-4 text-5xl font-bold leading-tight text-[#2d2d2d] sm:text-6xl">
                Ana Carolina <span className="text-[#1a1a1a]">Magalhães</span>
              </h1>
              <p className="mt-6 text-lg text-[#6b6b6b]">
                I design digital products that feel effortless to use. With a background in Frontend Development, I bring ideas from concept to screen and create content to make technology accessible to everyone.
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
                <h3 className="mt-2 text-2xl font-semibold text-[#2d2d2d]">Digital products & content</h3>
                <p className="mt-3 text-sm text-[#6b6b6b]">
                  Designing experiences that feel human, and content that makes technology approachable.
                </p>
              </div>
              <div className="relative mt-10 overflow-hidden rounded-2xl border border-black/10 bg-[#e2ddd8] p-4 shadow-sm">
                <Image
                  src="/profile.png"
                  alt="Ana Carolina"
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
                A curated selection of product design, branding, and digital experiences that represent my current work.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-[#2d2d2d] transition hover:border-black/30 hover:text-[#1a1a1a]"
            >
              View All Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="expertise" className="space-y-6 scroll-mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Toolkit</p>
            <h2 className="mt-2 text-4xl font-semibold text-[#2d2d2d]">Expertise</h2>
            <p className="mt-2 text-[#6b6b6b]">
              Continuously evolving skill set focused on design quality, product thinking, and storytelling.
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

        <section id="services" className="space-y-8 scroll-mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Services</p>
            <h2 className="mt-2 text-4xl font-semibold text-[#2d2d2d]">How I Can Help</h2>
            <p className="mt-2 text-[#6b6b6b]">
              From early-stage product thinking to polished interfaces and working code.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_I_CAN_HELP.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-3xl border border-black/5 bg-[#f5f3f1] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.05] text-[#2d2d2d]">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-[#2d2d2d]">{title}</h3>
                <p className="text-sm text-[#6b6b6b]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="building" className="space-y-8 scroll-mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Work in Progress</p>
            <h2 className="mt-2 text-4xl font-semibold text-[#2d2d2d]">Currently Building</h2>
            <p className="mt-2 text-[#6b6b6b]">
              Projects I&apos;m actively designing and building right now.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CURRENTLY_BUILDING.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-4 rounded-3xl border border-black/5 bg-[#f5f3f1] p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#6b6b6b]">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#6b6b6b]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.status === "Active" ? "bg-green-500" : "bg-amber-400"
                      }`}
                    />
                    {item.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#2d2d2d]">{item.name}</h3>
                  <p className="mt-2 text-sm text-[#6b6b6b]">{item.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#6b6b6b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] hover:text-[#2d2d2d]"
                  >
                    Visit {item.name}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="content" className="space-y-8 scroll-mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#6b6b6b]">Storytelling</p>
            <h2 className="mt-2 text-4xl font-semibold text-[#2d2d2d]">Beyond Code</h2>
            <p className="mt-2 text-[#6b6b6b]">
              My creative process lives at the intersection of design and technology. I share product design insights on Dribbble and build a community around software and design culture through Neo Coders.
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
              Have a product to design or a collaboration in mind? Drop me a message and let&apos;s build something extraordinary.
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
                  placeholder="John Doe"
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
                  placeholder="hello@johndoe.com"
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
                placeholder="Let's build something"
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

      <Footer tagline="Built with React & Passion" />
    </div>
  );
}
