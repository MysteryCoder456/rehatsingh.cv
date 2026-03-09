"use client";

import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function AppearanceSwitcher() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const switchTheme = () => {
    switch (theme) {
      case "system":
        setTheme("dark");
        break;
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        console.warn("Unknown theme received:", theme);
    }
  };

  return (
    <button
      type="button"
      onClick={switchTheme}
      className="fixed cursor-pointer z-50 right-0 bottom-0 m-4 p-1.5 rounded-full bg-foreground text-background opacity-50 hover:opacity-100 transition-opacity"
    >
      {theme === "system" ? (
        <SunMoonIcon />
      ) : theme === "light" ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
}
