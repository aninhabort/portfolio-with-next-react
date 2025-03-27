// import { useTheme } from "@/hooks/useTheme";
// import { Moon, Sun } from "@phosphor-icons/react";

const Header = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between pl-6">
      <h3 className="font-bold">
        Ana Carolina <strong className="text-purple-600">Magalhães</strong>
      </h3>
      {/* <div>
        {theme === "light" ? (
          <button
            type="button"
            className="cursor-pointer p-2.5 border-none rounded-3xl bg-zinc-900 drop-shadow-lg"
            onClick={toggleTheme}
          >
            <Moon className="text-gray-400" size={24} />
          </button>
        ) : (
          <button
            type="button"
            className="cursor-pointer p-2.5 border-none rounded-3xl bg-slate-100 drop-shadow-lg"
            onClick={toggleTheme}
          >
            <Sun className="text-gray-400" size={24} />
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Header;
