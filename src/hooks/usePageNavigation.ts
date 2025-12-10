import { useEffect, useState } from "react";
import { PageType } from "@/constants/navigation";

export function usePageNavigation() {
  const [currentPage, setCurrentPage] = useState(PageType.ABOUT);

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

  return { currentPage, handleNavigation };
}
