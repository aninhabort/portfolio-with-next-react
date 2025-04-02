"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Infos from "@/components/Infos";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contacts from "@/components/Contacts";
import { ReactNode, useEffect, useState } from "react";
import { House, Article, BagSimple, AddressBook } from "@phosphor-icons/react";

enum PageType {
  ABOUT = "about",
  RESUME = "resume",
  PROJECTS = "projects",
  CONTACTS = "contacts",
}
interface PageProps {
  [key: string]: ReactNode;
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState(PageType.ABOUT);

  const pages: PageProps = {
    [PageType.ABOUT]: <About />,
    [PageType.RESUME]: <Resume />,
    [PageType.PROJECTS]: <Projects />,
    [PageType.CONTACTS]: <Contacts />,
  };

  const handleNavigation = (page: PageType, url: string) => {
    window.history.pushState({ page }, "", url);
    setCurrentPage(page);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="align-middle p-6">
      <Header />
      
      <div className="max-sm:top-0 flex max-sm:flex-col max-sm:gap-2 justify-end pt-16 max-sm:ml-6">
        <div className="max-sm:hidden flex flex-row items-center gap-3 bg-neutral-700 p-2 rounded-lg">
          {[
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
              link: "/#resume",
            },
            {
              type: PageType.PROJECTS,
              icon: <BagSimple size={20} />,
              label: "Projects",
              link: "/#projects",
            },
            {
              type: PageType.CONTACTS,
              icon: <AddressBook size={20} />,
              label: "Contacts",
              link: "/#contacts",
            },
          ].map(({ type, icon, label, link }) => (
            <div
              key={type}
              className={`flex flex-col items-center justify-center gap-1 w-20 min-w-[80px] p-2 text-sm text-center cursor-pointer rounded-lg transition-all ${
                currentPage === type ? "bg-purple-600" : "hover:bg-neutral-600"
              }`}
              onClick={() => handleNavigation(type, link)}
            >
              {icon}
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row max-sm:flex-col gap-7 max-sm:gap-3 pt-5 max-sm:mt-10">
        <Infos />

        <div className="max-sm:visible min-md:hidden flex flex-row justify-evenly items-center bg-neutral-700 p-2 mt-1 mb-1 rounded-lg">
          {[
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
              link: "/#resume",
            },
            {
              type: PageType.PROJECTS,
              icon: <BagSimple size={20} />,
              label: "Projects",
              link: "/#projects",
            },
            {
              type: PageType.CONTACTS,
              icon: <AddressBook size={20} />,
              label: "Contacts",
              link: "/#contacts",
            },
          ].map(({ type, icon, label, link }) => (
            <div
              key={type}
              className={`flex flex-col items-center justify-center gap-1 w-20 min-w-[80px] p-2 text-sm text-center cursor-pointer rounded-lg transition-all ${
                currentPage === type ? "bg-purple-600" : "hover:bg-neutral-600"
              }`}
              onClick={() => handleNavigation(type, link)}
            >
              {icon}
              <p>{label}</p>
            </div>
          ))}
        </div>

        {pages[currentPage]}
      </div>
    </div>
  );
}
