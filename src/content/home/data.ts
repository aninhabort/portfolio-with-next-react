import { ComponentType } from "react";
import { StaticImageData } from "next/image";
import {
  IconProps,
  DribbbleLogo,
  FigmaLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react";
import { PROJECT_ARCHIVE } from "@/content/projects/archive";

export interface NavLink {
  href: string;
  label: string;
}

export interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  accent: string;
  previewImage?: string | StaticImageData;
}

export interface ContentCard {
  title: string;
  description: string;
  handle: string;
  href: string;
  accent: string;
  icon: ComponentType<IconProps>;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ComponentType<IconProps>;
}

const SKILLS = [
  "Figma",
  "Product Design",
  "UX/UI Design",
  "Design Systems",
  "React",
  "TypeScript",
  "Vue.js",
  "Next.js",
  "Tailwind CSS",
  "Responsive Design",
];

const CONTACT_INFO = {
  phone: "+351914078805",
  email: "carol2015bortolini@gmail.com",
  location: "Coimbra, Portugal",
};

type SocialDirectoryItem = {
  href: string;
  icon: ComponentType<IconProps>;
  label: string;
};

const SOCIAL_DIRECTORY: SocialDirectoryItem[] = [
  {
    href: "https://www.linkedin.com/in/anabmagalhaes/",
    icon: LinkedinLogo,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/aninhabort",
    icon: GithubLogo,
    label: "GitHub",
  },
  {
    href: "https://dribbble.com/aninhabort",
    icon: DribbbleLogo,
    label: "Dribbble",
  },
  {
    href: "https://www.figma.com/@anabmagalhaes",
    icon: FigmaLogo,
    label: "Figma",
  },
  {
    href: "https://medium.com/@aninhabort",
    icon: MediumLogo,
    label: "Medium",
  },
  {
    href: "https://www.instagram.com/neo.coders/",
    icon: InstagramLogo,
    label: "Instagram",
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Skills" },
  { href: "#content", label: "Content" },
  { href: "#contact", label: "Contact" },
];

export const FEATURED_PROJECTS: FeaturedProject[] = PROJECT_ARCHIVE.map((project) => ({
  title: project.title,
    category: project.category,
    description: project.description,
    tags: project.tags,
    designUrl: project.designUrl,
    liveUrl: project.liveUrl,
    codeUrl: project.codeUrl,
    accent: project.gradient ?? "from-[#d7d2cd] via-[#ece8e4] to-[#f5f3f1]",
    previewImage: project.previewImage,
  })).slice(0, 3);

export const HERO_STATS = [
  { label: "Years Building", value: "02" },
  { label: "Projects", value: String(PROJECT_ARCHIVE.length).padStart(2, "0") },
];

export const EXPERTISE = SKILLS;

const instagramLink = SOCIAL_DIRECTORY.find((link) => link.label === "Instagram");
const dribbbleLink = SOCIAL_DIRECTORY.find((link) => link.label === "Dribbble");

export const CONTENT_CARDS: ContentCard[] = [
  {
    title: "Neo Coders",
    description: "Bite-sized tutorials, technical deep dives, and practical insights focused on software engineering.",
    handle: "@neo.coders",
    href: instagramLink?.href ?? "https://www.instagram.com/neo.coders/",
    accent: "border-black/10 hover:border-black/20",
    icon: instagramLink?.icon ?? InstagramLogo,
  },
  {
    title: "Design Iterations",
    description: "UI design case studies for web and mobile, motion prototypes, and visual explorations straight from my Figma files.",
    handle: "@aninhabort",
    href: dribbbleLink?.href ?? "https://dribbble.com/aninhabort",
    accent: "border-black/10 hover:border-black/20",
    icon: dribbbleLink?.icon ?? DribbbleLogo,
  },
];

export const CONTACT_SUMMARY = {
  email: CONTACT_INFO.email,
  location: CONTACT_INFO.location,
};

const SOCIAL_LABELS = new Set(["LinkedIn", "GitHub", "Dribbble", "Figma", "Medium"]);

export const SOCIALS: SocialLink[] = SOCIAL_DIRECTORY.filter((link) => SOCIAL_LABELS.has(link.label)).map((link) => ({
  href: link.href,
  label: link.label,
  icon: link.icon,
}));