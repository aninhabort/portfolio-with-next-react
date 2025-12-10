import { ReactNode } from "react";
import { House, Article, BagSimple, AddressBook } from "@phosphor-icons/react";

export enum PageType {
  ABOUT = "about",
  RESUME = "resume",
  PROJECTS = "projects",
  CONTACTS = "contacts",
}

export interface NavigationItem {
  type: PageType;
  icon: ReactNode;
  label: string;
  link: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    type: PageType.ABOUT,
    icon: <House size={20} />,
    label: "Home",
    link: "/",
  },
  {
    type: PageType.RESUME,
    icon: <Article size={20} />,
    label: "Resume",
    link: "/resume",
  },
  {
    type: PageType.PROJECTS,
    icon: <BagSimple size={20} />,
    label: "Projects",
    link: "/projects",
  },
  {
    type: PageType.CONTACTS,
    icon: <AddressBook size={20} />,
    label: "Contacts",
    link: "/contacts",
  },
];
