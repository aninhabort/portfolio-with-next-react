import { StaticImageData } from "next/image";
import pokedexPreview from "@/content/assets/pokedex.png";
import pokeballPreview from "@/content/assets/pokeball.png";
import todoPreview from "@/content/assets/todo.png";
import ghibliAppPreview from "@/content/assets/ghibli-app.png";
// import ghibliApiPreview from "@/content/assets/ghibli-api.png";
import weatherPreview from "@/content/assets/weather.png";

export interface ProjectArchiveEntry {
  title: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  designUrl?: string;
  previewImage?: string | StaticImageData;
  liveUrl: string;
  codeUrl: string;
}

export const PROJECT_FILTERS = ["All", "Web Apps", "Mobile", "UI/UX", "APIs"];

export const PROJECT_ARCHIVE: ProjectArchiveEntry[] = [
  {
    title: "Pokedex",
    description:
      "A Pokédex-inspired case study that pairs a detailed Figma system with a responsive build to recreate the classic device experience end to end.",
    tags: ["Figma", "React", "Styled Components", "Design System"],
    category: "UI/UX & Web Apps",
    gradient: "from-[#f472b6]/30 via-[#facc15]/10 to-transparent",
    designUrl: "https://www.figma.com/community/file/1480973290003426198",
    previewImage: pokedexPreview,
    liveUrl: "https://ana-pokedex.vercel.app/",
    codeUrl: "https://github.com/aninhabort/pokedex",
  },
  {
    title: "Pokeball Animated",
    description:
      "A simple Three.js scene with an animated Pokéball built to practice the WebGL basics: scene, camera, renderer, lights, and materials.",
    tags: ["Three.js", "Animation", "GSAP"],
    category: "Web Apps",
    gradient: "from-[#60a5fa]/30 via-[#3b82f6]/10 to-transparent",
    previewImage: pokeballPreview,
    liveUrl: "https://pokeball-animated.netlify.app/",
    codeUrl: "https://github.com/aninhabort/pokeball-animated",
  },
  {
    title: "To-Do List App",
    description:
      "SwiftUI to-do list that highlights how simple, responsive interfaces can make organizing tasks feel effortless.",
    tags: ["SwiftUI", "iOS"],
    category: "Mobile",
    gradient: "from-[#34d399]/30 via-[#10b981]/10 to-transparent",
    previewImage: todoPreview,
    liveUrl: "",
    codeUrl: "https://github.com/aninhabort/todo-list-app",
  },
  {
    title: "Ghibli Movies",
    description:
      "Web experience that consumes the Studio Ghibli API to surface trivia, casts, and custom illustrations for every film.",
    tags: ["React", "API"],
    category: "Web Apps",
    gradient: "from-[#a78bfa]/30 via-[#7c3aed]/10 to-transparent",
    previewImage: ghibliAppPreview,
    liveUrl: "https://allghiblimovies.netlify.app/",
    codeUrl: "https://github.com/aninhabort/ghibli-movies",
  },
  {
    title: "Ghibli Movies API",
    description:
      "Simple JavaScript API that lists select Studio Ghibli movies for quick experimentation.",
    tags: ["JavaScript", "Express", "API"],
    category: "APIs",
    gradient: "from-[#fb7185]/30 via-[#f97316]/10 to-transparent",
    // previewImage: ghibliApiPreview,
    liveUrl: "",
    codeUrl: "https://github.com/aninhabort/ghibli-movies-api",
  },
  {
    title: "Weather App",
    description:
      "Weather forecast project powered by XMLHttpRequest, AJAX, and the OpenWeather API.",
    tags: ["JavaScript", "OpenWeather API", "AJAX", "XMLHttpRequest"],
    category: "Web Apps",
    gradient: "from-[#22d3ee]/30 via-[#0ea5e9]/10 to-transparent",
    previewImage: weatherPreview,
    liveUrl: "https://aninhabort.github.io/weather-app/",
    codeUrl: "https://github.com/aninhabort/weather-app",
  },
];

export const EXPERTISE_CHIPS = [
  "React",
  "Next.js",
  "SwiftUI",
  "TypeScript",
  "Tailwind CSS",
  "Three.js",
  "Node.js",
  "Figma",
  "Firebase",
  "Web Performance",
];
