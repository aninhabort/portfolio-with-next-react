import { Button } from "@/components/ui/button";
import { NavigationItem, PageType } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface NavigationButtonProps {
  item: NavigationItem;
  currentPage: PageType;
  onNavigate: (page: PageType, url: string) => void;
}

export function NavigationButton({ item, currentPage, onNavigate }: NavigationButtonProps) {
  const isActive = currentPage === item.type;

  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={cn(
        "flex flex-col items-center justify-center gap-1 w-20 min-w-[80px] h-auto py-2 text-sm text-center",
        isActive ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-neutral-600"
      )}
      onClick={() => onNavigate(item.type, item.link)}
    >
      {item.icon}
      <span>{item.label}</span>
    </Button>
  );
}
