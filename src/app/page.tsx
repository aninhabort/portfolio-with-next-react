"use client";

import { 
  About, 
  Resume, 
  Projects, 
  Contacts,
  Header,
  Infos,
  NavigationMenu 
} from "@/components";
import { usePageNavigation } from "@/hooks/usePageNavigation";
import { PageType } from "@/constants/navigation";
import { ReactNode } from "react";

const PAGE_COMPONENTS: Record<PageType, ReactNode> = {
  [PageType.ABOUT]: <About />,
  [PageType.RESUME]: <Resume />,
  [PageType.PROJECTS]: <Projects />,
  [PageType.CONTACTS]: <Contacts />,
};

export default function Page() {
  const { currentPage, handleNavigation } = usePageNavigation();

  return (
    <div className="px-6">
      <Header />
      
      <div className="flex justify-end pt-4 max-sm:pt-16">
        <NavigationMenu 
          currentPage={currentPage} 
          onNavigate={handleNavigation}
          variant="desktop"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-7 pt-5 sm:items-stretch">
        <Infos />

        <div className="w-full space-y-4">
          <NavigationMenu 
            currentPage={currentPage} 
            onNavigate={handleNavigation}
            variant="mobile"
          />

          {PAGE_COMPONENTS[currentPage]}
        </div>
      </div>
    </div>
  );
}
