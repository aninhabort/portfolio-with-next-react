export interface ProjectArchiveEntry {
  title: string;
  description: string;
  tags: string[];
  category: string;
  featured?: boolean;
  gradient?: string;
  designUrl?: string;
  previewImage?: string;
  liveUrl?: string;
  codeUrl?: string;
  instagram?: string;
}

export const PROJECT_FILTERS = ["All", "Product Design", "Branding", "Landing Pages", "Web Apps", "Mobile", "APIs"];

export const PROJECTS_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#collaborate", label: "Collaborate" },
];

export const PROJECT_ARCHIVE: ProjectArchiveEntry[] = [
  {
    title: "Artisan Handmade Shop",
    description:
      "An online shop concept for artisan goods, with a focus on product photography, storytelling, and a handcrafted visual language.",
    tags: ["E-commerce", "UI/UX", "DailyUI", "Figma"],
    category: "Product Design",
    previewImage: "/assets/artisan-handmade-shop.png",
    designUrl: "https://www.figma.com/community/file/1643603249752830070/handmade-shop-e-commerce-design-ui-kit?q_id=63fbde00-1c06-4462-8610-3083a10c3f21",
  },
  {
    title: "Flash Messages",
    description:
      "A component-level exploration of flash messages and notification UI patterns, covering success, error, warning, and info states with micro-interaction considerations.",
    tags: ["UI Components", "Design System", "DailyUI", "Figma"],
    category: "Product Design",
    gradient: "from-[#e8d7d7] via-[#ece8e4] to-[#f5f3f1]",
    designUrl: "https://www.figma.com/community/file/1639614821021000026/flash-messages-ui-system?q_id=b1e0e7fd-5739-462b-b360-4c1ce1e195c5",
    previewImage: "/assets/flash-messages.png",
  },
  {
    title: "Social Share Sheet",
    description:
      "A mobile UI component for sharing content across social platforms, featuring a clean layout, intuitive controls, and brand-consistent styling.",
    tags: ["Mobile App", "Social Sharing", "DailyUI", "Figma"],
    category: "Product Design",
    gradient: "from-[#e8d7d7] via-[#ece8e4] to-[#f5f3f1]",
    designUrl: "https://www.figma.com/community/file/1637446342579038262/social-share-mobile-ui?q_id=69ec1f4d-b491-4863-9005-f7dc96459506",
    previewImage: "/assets/social-share-sheet.png",
  },
  {
    title: "Vinyl Music Player",
    description:
      "A music player UI exploring dark aesthetics, typographic hierarchy, and intuitive playback controls. Focused on creating a tactile, immersive listening experience.",
    tags: ["UI/UX", "DailyUI", "Figma", "Music App"],
    category: "Product Design",
    previewImage: "/assets/vinyl-player.png",
    designUrl: "https://www.figma.com/community/file/1635690685648950587/vinyl-player-music-player-ui?q_id=e4cf6339-3b4a-4f00-98cb-4c7fb18643a7",
  },
  {
    title: "Haney Paper Co: 404 Error Page",
    description:
      "A playful 404 error page design for a stationery brand, incorporating brand elements and a touch of humor to turn a frustrating experience into a delightful one.",
    tags: ["Landing Page", "UI/UX", "DailyUI", "Figma", "Error Page"],
    category: "Product Design",
    previewImage: "/assets/haney-paper-co-404.png",
    designUrl: "https://www.figma.com/community/file/1634184366838589852/honey-paper-co-404-error-page?q_id=e4cf6339-3b4a-4f00-98cb-4c7fb18643a7",
  },
  {
    title: "ARC Reader App",
    description:
      "A mobile UI kit for a book reader app, covering user profile, settings, and reading flow screens with a clean and accessible visual language.",
    tags: ["Mobile App", "User Profile", "DailyUI", "Figma"],
    category: "Mobile",
    previewImage: "/assets/arc-reader-app.png",
    designUrl: "https://www.figma.com/community/file/1633177353181862073/arc-book-reader-mobile-app-ui?q_id=e4cf6339-3b4a-4f00-98cb-4c7fb18643a7",
  },
  {
    title: "App Icon Design",
    description:
      "A visual exploration of app icon design principles: shape, color, symbolism, and platform adaptability.",
    tags: ["App Icon", "Visual Design", "DailyUI", "Figma"],
    category: "Branding",
    previewImage: "/assets/app-icon-brew-bloom.png",
    designUrl: "https://www.figma.com/community/file/1631725777902496389/brew-bloom-app-icon?q_id=348868e2-b1d6-41bc-9dbc-5662f985d494",
  },
  {
    title: "Mortgage Calculator",
    description:
      "A financial calculator UI focused on clarity, progressive disclosure, and accessible form design for a complex data entry experience.",
    tags: ["Finance", "Calculator UI", "DailyUI", "Figma"],
    category: "Product Design",
    gradient: "from-[#d7d2cd] via-[#ece8e4] to-[#f5f3f1]",
    designUrl: "https://www.figma.com/community/file/1628102550814730883/mortgage-calculator-mobile-app?q_id=348868e2-b1d6-41bc-9dbc-5662f985d494",
    previewImage: "/assets/mortgage-calculator.png",
  },
  {
    title: "Book Landing Page",
    description:
      "A landing page design for a book release, featuring a clean layout, compelling typography, and strategic use of imagery to capture the essence of the story.",
    tags: ["Landing Page", "UI/UX", "DailyUI", "Figma"],
    category: "Product Design",
    gradient: "from-[#e8e4d7] via-[#ece8e4] to-[#f5f3f1]",
    designUrl: "https://www.figma.com/community/file/1626620564843515708/book-landing-page-cozy-editorial-ui?q_id=348868e2-b1d6-41bc-9dbc-5662f985d494",
    previewImage: "/assets/book-landing-page.png",
  },
  {
    title: "Bookstore Credit Card Checkout",
    description:
      "A checkout flow for a bookstore credit card application, designed to simplify the application process while maintaining brand consistency and trustworthiness.",
    tags: ["Mobile App", "UI/UX", "DailyUI", "Figma"],
    category: "Product Design",
    gradient: "from-[#e8e4d7] via-[#ece8e4] to-[#f5f3f1]",
    designUrl: "https://www.figma.com/community/file/1626320458011535211/credit-card-checkout-bookstore-experience?q_id=348868e2-b1d6-41bc-9dbc-5662f985d494",
    previewImage: "/assets/bookstore-checkout.png",
  },
  {
    title: "Book Giveaway Sign Up",
    description:
      "A multi-step sign-up flow designed for a giveaway campaign. Focused on reducing friction and guiding users through each step with clarity.",
    tags: ["Onboarding", "Sign Up Flow", "DailyUI", "Figma"],
    category: "Product Design",
    gradient: "from-[#d7d2cd] via-[#ece8e4] to-[#f5f3f1]",
    designUrl: "https://www.figma.com/community/file/1625897527918452972/book-giveaway-sign-up-success-pages?q_id=348868e2-b1d6-41bc-9dbc-5662f985d494",
    previewImage: "/assets/book-giveaway-signup.png",
  },
  {
    title: "Velour Coffee: Brand Identity",
    description:
      "A comprehensive brand identity for Velour Coffee, a specialty coffee roaster. Covering logo, color palette, typography, packaging, and social media applications.",
    tags: ["Brand Identity", "Logo Design", "Typography", "Figma"],
    category: "Branding",
    designUrl: "https://dribbble.com/shots/27180787-Velour-Coffee-Brand-Identity-Design",
    previewImage: "/assets/velour-coffee-branding.png",
  },
  {
    title: "Natural Beauty: Social Media Brand Study",
    description:
      "A visual identity and social media design system for a fictional skincare brand, focused on a cozy-minimalist aesthetic with grid-based layouts and a curated typography system.",
    tags: ["Visual Identity", "Social Media Design", "UI/UX", "Figma"],
    category: "Branding",
    featured: true,
    designUrl: "https://dribbble.com/shots/27176986-Natural-Beauty-Social-Media-Brand-Study",
    previewImage: "/assets/natural-beauty.png",
  },
  {
    title: "Press Page",
    description:
      "A press and media page design balancing brand voice with scannable content structure for journalists and partners.",
    tags: ["Landing Page", "Brand", "DailyUI", "Figma"],
    category: "Landing Pages",
    gradient: "from-[#d4d8e0] via-[#e4e8f0] to-[#f5f3f1]",
    designUrl: "https://dribbble.com/shots/26933887-Press-Page-Desktop-UI",
    previewImage: "/assets/press-page.png",
  },
  {
    title: "Neo Coders",
    description:
      "A technology-focused content brand built from the ground up. I own the full brand: visual identity, content strategy, and educational production across Instagram, Threads, and LinkedIn. Growing a community around software development, product design, and tech culture.",
    tags: ["Brand Strategy", "Visual Identity", "Content Creation", "Community"],
    category: "Branding",
    featured: true,
    gradient: "from-[#1a1a1a] via-[#2d2d2d] to-[#4a4a4a]",
    previewImage: "/assets/neo-coders-logo.png",
    instagram: "https://www.instagram.com/neo.coders/",
  },
  {
    title: "Velotra: Logistics Landing Page",
    description:
      "A landing page design for a logistics company, featuring a clean and modern aesthetic with a focus on clear information hierarchy and user engagement.",
    tags: ["Landing Page", "UI/UX", "Branding", "Figma"],
    category: "Landing Pages",
    featured: true,
    designUrl: "https://www.figma.com/community/file/1615437539529694523",
    previewImage: "/assets/velotra-landing-page.png",
  },
  {
    title: "Pokedex",
    description:
      "A full Product Design case study: a complex Figma Design System translated into a high-performance React application.",
    tags: ["Figma", "Design System", "React", "Styled Components"],
    category: "Product Design",
    designUrl: "https://www.figma.com/community/file/1480973290003426198",
    previewImage: "/assets/pokedex.png",
    liveUrl: "https://ana-pokedex.netlify.app/",
    codeUrl: "https://github.com/aninhabort/pokedex",
  },
  {
    title: "To-Do List App",
    description:
      "A minimal iOS task manager designed for focus. Clean interfaces and intuitive gestures to make organizing tasks feel effortless.",
    tags: ["UX/UI Design", "SwiftUI", "iOS"],
    category: "Mobile",
    previewImage: "/assets/todo.png",
    codeUrl: "https://github.com/aninhabort/todo-list-app",
  },
  {
    title: "Pokeball Animated",
    description:
      "An exploration of 3D interactions and animations using Three.js to create an immersive visual experience.",
    tags: ["Interaction Design", "Three.js", "GSAP"],
    category: "Web Apps",
    previewImage: "/assets/pokeball.png",
    liveUrl: "https://pokeball-animated.netlify.app/",
    codeUrl: "https://github.com/aninhabort/pokeball-animated",
  },
  {
    title: "Ghibli Movies",
    description:
      "A web application using the Studio Ghibli API to display movie information, featuring custom illustrations and a clean user interface.",
    tags: ["React", "API", "UI Design"],
    category: "Web Apps",
    previewImage: "/assets/ghibli-app.png",
    liveUrl: "https://allghiblimovies.netlify.app/",
    codeUrl: "https://github.com/aninhabort/ghibli-movies",
  },
  {
    title: "Weather App",
    description:
      "A clean weather forecast dashboard providing real-time data with a focus on clear information hierarchy.",
    tags: ["JavaScript", "API", "Responsive Design"],
    category: "Web Apps",
    previewImage: "/assets/weather.png",
    liveUrl: "https://aninhabort.github.io/weather-app/",
    codeUrl: "https://github.com/aninhabort/weather-app",
  },
  {
    title: "Ghibli Movies API",
    description:
      "A back-end project developed to provide movie data for front-end experiments and testing.",
    tags: ["Node.js", "Express", "Backend"],
    category: "APIs",
    previewImage: "/assets/ghibli-api.png",
    codeUrl: "https://github.com/aninhabort/ghibli-movies-api",
  },
];

export const EXPERTISE_CHIPS = [
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
