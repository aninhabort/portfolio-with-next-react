import { ComponentType } from "react";
import {
  IconProps,
  DribbbleLogoIcon,
  FigmaLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MediumLogoIcon,
  PenNib,
  Layout,
  DeviceMobile,
  Stack,
  Browser,
  Code,
} from "@phosphor-icons/react";
import { PROJECT_ARCHIVE, ProjectArchiveEntry } from "@/content/projects/archive";

export interface NavLink {
  href: string;
  label: string;
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

export interface ServiceItem {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}

export interface BuildingItem {
  name: string;
  description: string;
  status: "Active" | "In Development";
  category: string;
  tags: string[];
  href?: string;
}

const SKILLS = [
  "Product Design",
  "UX/UI Design",
  "Figma",
  "Design Systems",
  "Branding",
  "Content Creation",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
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
    icon: LinkedinLogoIcon,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/aninhabort",
    icon: GithubLogoIcon,
    label: "GitHub",
  },
  {
    href: "https://dribbble.com/aninhabort",
    icon: DribbbleLogoIcon,
    label: "Dribbble",
  },
  {
    href: "https://www.figma.com/@anabmagalhaes",
    icon: FigmaLogoIcon,
    label: "Figma",
  },
  {
    href: "https://medium.com/@aninhabort",
    icon: MediumLogoIcon,
    label: "Medium",
  },
  {
    href: "https://www.instagram.com/neo.coders/",
    icon: InstagramLogoIcon,
    label: "Instagram",
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#content", label: "Content" },
  { href: "#contact", label: "Contact" },
];

export const FEATURED_PROJECTS: ProjectArchiveEntry[] = PROJECT_ARCHIVE
  .filter((project) => project.featured)
  .map((project) => ({
    title: project.title,
    category: project.category,
    description: project.description,
    tags: project.tags,
    featured: project.featured,
    designUrl: project.designUrl,
    liveUrl: project.liveUrl,
    codeUrl: project.codeUrl,
    gradient: project.gradient ?? "from-[#d7d2cd] via-[#ece8e4] to-[#f5f3f1]",
    previewImage: project.previewImage,
    instagram: project.instagram,
  }));

const designProjectCount = PROJECT_ARCHIVE.filter((p) =>
  ["Product Design", "Branding", "Landing Pages", "Mobile"].includes(p.category)
).length;

export const HERO_STATS = [
  { label: "Years Building", value: "02" },
  { label: "Design Projects", value: String(designProjectCount).padStart(2, "0") },
];

export const EXPERTISE = SKILLS;

const instagramLink = SOCIAL_DIRECTORY.find((link) => link.label === "Instagram");
const dribbbleLink = SOCIAL_DIRECTORY.find((link) => link.label === "Dribbble");

export const CONTENT_CARDS: ContentCard[] = [
  {
    title: "Neo Coders",
    description:
      "A content brand I built around software development and product design. Bite-sized insights, tutorials, and behind-the-scenes of building digital products.",
    handle: "@neo.coders",
    href: instagramLink?.href ?? "https://www.instagram.com/neo.coders/",
    accent: "border-black/10 hover:border-black/20",
    icon: instagramLink?.icon ?? InstagramLogoIcon,
  },
  {
    title: "Design Iterations",
    description:
      "UI case studies, DailyUI challenges, and visual explorations: from product screens to branding systems, straight from my Figma files.",
    handle: "@aninhabort",
    href: dribbbleLink?.href ?? "https://dribbble.com/aninhabort",
    accent: "border-black/10 hover:border-black/20",
    icon: dribbbleLink?.icon ?? DribbbleLogoIcon,
  },
];

export const HOW_I_CAN_HELP: ServiceItem[] = [
  {
    title: "Product Design",
    description: "End-to-end product design from early research and wireframes to high-fidelity prototypes.",
    icon: PenNib,
  },
  {
    title: "UI Design",
    description: "Clean, functional interfaces that balance visual quality with usability and accessibility.",
    icon: Layout,
  },
  {
    title: "Mobile App Design",
    description: "Intuitive mobile experiences designed for iOS and Android, from flows to polished screens.",
    icon: DeviceMobile,
  },
  {
    title: "Design Systems",
    description: "Scalable component libraries and design tokens that keep products and teams consistent.",
    icon: Stack,
  },
  {
    title: "Landing Pages",
    description: "Visually compelling pages that communicate your brand story and convert visitors.",
    icon: Browser,
  },
  {
    title: "Frontend Development",
    description: "Bringing designs to life with React, Next.js, and modern CSS, so nothing gets lost in translation.",
    icon: Code,
  },
];

export const CURRENTLY_BUILDING: BuildingItem[] = [
  {
    name: "Memory Stamp",
    description:
      "A mobile app designed to help people preserve memories, stories, and meaningful moments across generations. Focused on emotional UX and gentle interaction design.",
    status: "In Development",
    category: "Mobile App",
    tags: ["Mobile Design", "Product Design", "UX Research"],
  },
  {
    name: "Neo Coders",
    description:
      "A technology-focused content brand creating educational content about software development, product design, and tech culture, growing a community across Instagram, Threads, and LinkedIn.",
    status: "Active",
    category: "Content Brand",
    tags: ["Branding", "Content Creation", "Community"],
    href: "https://www.instagram.com/neo.coders/",
  },
];

export const CONTACT_SUMMARY = {
  email: CONTACT_INFO.email,
  location: CONTACT_INFO.location,
};

const SOCIAL_LABELS = new Set(["LinkedIn", "GitHub", "Dribbble", "Figma", "Medium"]);

export const SOCIALS: SocialLink[] = SOCIAL_DIRECTORY
  .filter((link) => SOCIAL_LABELS.has(link.label))
  .map((link) => ({
    href: link.href,
    label: link.label,
    icon: link.icon,
  }));
