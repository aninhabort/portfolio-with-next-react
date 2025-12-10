import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="flex justify-between items-center">
        <h3 className="font-bold">
          Ana Carolina <strong className="text-purple-400">B. de Magalhães</strong>
        </h3>
        <div className="w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center py-4">
      <h3 className="font-bold">
        Ana Carolina <strong className="text-purple-400">B. de Magalhães</strong>
      </h3>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-700"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="text-yellow-400 transition-transform hover:rotate-180 duration-500" size={32} />
        ) : (
          <Moon className="text-purple-600 transition-transform hover:rotate-12 duration-300" size={32} />
        )}
      </Button>
    </div>
  );
};

export default Header;
