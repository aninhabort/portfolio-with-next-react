import { StaticImageData } from "next/image";
import pokedexPreview from "@/content/assets/pokedex.png";
import pokeballPreview from "@/content/assets/pokeball.png";
import todoPreview from "@/content/assets/todo.png";
import ghibliAppPreview from "@/content/assets/ghibli-app.png";
import ghibliApiPreview from "@/content/assets/ghibli-api.png";
import weatherPreview from "@/content/assets/weather.png";

export interface ProjectArchiveEntry {
  title: string;
  description: string;
  tags: string[];
  category: string;
  gradient?: string;
  designUrl?: string;
  previewImage?: string | StaticImageData;
  liveUrl: string;
  codeUrl: string;
}

export const PROJECT_FILTERS = ["All", "Product Design", "Web Apps", "Mobile", "APIs"];

export const PROJECT_ARCHIVE: ProjectArchiveEntry[] = [
  {
    title: "Pokedex",
    description:
      "A Product Design case study focused on creating a complex Design System in Figma and translating it into a high-performance React application.",
    tags: ["Figma", "Design System", "React", "Styled Components"],
    category: "Product Design", 
    designUrl: "https://www.figma.com/community/file/1480973290003426198",
    previewImage: pokedexPreview,
    liveUrl: "https://ana-pokedex.netlify.app/",
    codeUrl: "https://github.com/aninhabort/pokedex",
  },
  {
    title: "To-Do List App",
    description:
      "A minimal iOS task manager designed for focus. I prioritized clean interfaces and intuitive gestures to make organizing tasks feel effortless.",
    tags: ["UX/UI Design", "SwiftUI", "iOS"],
    category: "Mobile",
    previewImage: todoPreview,
    liveUrl: "",
    codeUrl: "https://github.com/aninhabort/todo-list-app",
  },
  {
    title: "Pokeball Animated",
    description:
      "An exploration of 3D interactions and animations using Three.js to create an immersive visual experience.",
    tags: ["Interaction Design", "Three.js", "GSAP"],
    category: "Web Apps",
    previewImage: pokeballPreview,
    liveUrl: "https://pokeball-animated.netlify.app/",
    codeUrl: "https://github.com/aninhabort/pokeball-animated",
  },
  {
    title: "Ghibli Movies",
    description:
      "A web application that uses the Studio Ghibli API to display movie information, featuring custom illustrations and a clean user interface.",
    tags: ["React", "API", "UI Design"], 
    category: "Web Apps",
    previewImage: ghibliAppPreview,
    liveUrl: "https://allghiblimovies.netlify.app/",
    codeUrl: "https://github.com/aninhabort/ghibli-movies",
  },
  {
    title: "Weather App",
    description:
      "A clean weather forecast dashboard that provides real-time data with a focus on clear information hierarchy.",
    tags: ["JavaScript", "API", "Responsive Design"],
    category: "Web Apps",
    previewImage: weatherPreview,
    liveUrl: "https://aninhabort.github.io/weather-app/",
    codeUrl: "https://github.com/aninhabort/weather-app",
  },
  {
    title: "Ghibli Movies API",
    description:
      "A back-end project developed to provide movie data for front-end experiments and testing.",
    tags: ["Node.js", "Express", "Backend"],
    category: "APIs",
    previewImage: ghibliApiPreview,
    liveUrl: "",
    codeUrl: "https://github.com/aninhabort/ghibli-movies-api",
  },
];

export const EXPERTISE_CHIPS = [
  "Product Design",
  "Figma",
  "UX/UI Design",
  "Design Systems",
  "React",
  "TypeScript",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "Three.js",
];
