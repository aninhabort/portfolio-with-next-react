import { NavigationButton } from "./NavigationButton";
import { NAVIGATION_ITEMS, PageType } from "@/constants/navigation";

interface NavigationMenuProps {
  currentPage: PageType;
  onNavigate: (page: PageType, url: string) => void;
  variant?: "desktop" | "mobile";
}

export function NavigationMenu({ currentPage, onNavigate, variant = "desktop" }: NavigationMenuProps) {
  const containerClasses = variant === "desktop"
    ? "hidden sm:flex flex-row items-center gap-3 bg-neutral-700 p-2 rounded-lg"
    : "flex sm:hidden flex-row justify-evenly items-center bg-neutral-700 p-2 mt-2 mb-4 rounded-lg";

  return (
    <div className={containerClasses}>
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationButton
          key={item.type}
          item={item}
          currentPage={currentPage}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}
