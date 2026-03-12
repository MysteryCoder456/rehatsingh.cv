"use client";

import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AppearanceSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Select defaultValue={theme} onValueChange={setTheme}>
      <SelectTrigger className="fixed cursor-pointer z-50 right-0 bottom-0 m-4 border-border">
        <SelectValue placeholder={<SunMoonIcon />}>
          {theme === "system" ? (
            <SunMoonIcon />
          ) : theme === "light" ? (
            <SunIcon />
          ) : (
            <MoonIcon />
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectItem value="system">
            <SunMoonIcon /> System
          </SelectItem>
          <SelectItem value="light">
            <SunIcon /> Light
          </SelectItem>
          <SelectItem value="dark">
            <MoonIcon /> Dark
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
