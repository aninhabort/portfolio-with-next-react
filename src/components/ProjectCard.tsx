"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  DribbbleLogoIcon,
  FigmaLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";
import { ProjectArchiveEntry } from "@/content/projects/archive";

interface ProjectCardProps {
  project: ProjectArchiveEntry;
  variant?: "featured" | "archive";
}

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const isArchive = variant === "archive";

  return (
    <article className={`flex h-full flex-col ${isArchive ? "rounded-[28px]" : "rounded-3xl"} border border-black/5 bg-[#f5f3f1] p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/20`}>
      <div className={`relative mb-6 ${isArchive ? "h-48" : "h-36"} overflow-hidden rounded-2xl border border-black/10`}>
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            fill
            sizes={isArchive ? "(min-width: 1024px) 480px, 100vw" : "(min-width: 768px) 320px, 100vw"}
            className="object-cover"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`} />
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

      {isArchive ? (
        <div className="mt-5 flex-1">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">{project.category}</p>
          <h3 className="mt-1 text-2xl font-semibold text-[#2d2d2d]">{project.title}</h3>
          <p className="mt-3 text-sm text-[#6b6b6b]">{project.description}</p>
        </div>
      ) : (
        <>
          <h3 className="mt-5 mb-1 text-2xl font-semibold text-[#2d2d2d]">{project.title}</h3>
          <p className="text-xs uppercase tracking-[0.4em] text-[#6b6b6b]">{project.category}</p>
          <p className="mt-3 text-sm text-[#6b6b6b]">{project.description}</p>
        </>
      )}

      <div className={`${isArchive ? "mt-6" : "mt-auto pt-5"} flex flex-wrap items-center gap-4 text-sm font-semibold`}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#2d2d2d]"
          >
            {isArchive ? "Live Demo" : "Visit"}
            <ArrowUpRight size={16} />
          </a>
        )}
        {project.instagram && (
          <a
            href={project.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#6b6b6b] hover:text-[#2d2d2d]"
          >
            Instagram
            <InstagramLogoIcon size={16} />
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#6b6b6b] hover:text-[#2d2d2d]"
          >
            Github
            <GithubLogoIcon size={16} />
          </a>
        )}
        {project.designUrl && (
          <a
            href={project.designUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#6b6b6b] hover:text-[#2d2d2d]"
          >
            Design File
            {project.designUrl.includes("dribbble") ? (
              <DribbbleLogoIcon size={16} />
            ) : (
              <FigmaLogoIcon size={16} />
            )}
          </a>
        )}
      </div>
    </article>
  );
}
