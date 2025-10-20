"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => { // 1. Destructure onClick from props
  const { theme, setTheme } = useTheme();

  // 2. Create a new handler that does both jobs
  const handleToggleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // First, call the parent's onClick function if it was provided
    onClick?.(event);
    
    // Then, execute your theme-toggling logic
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={handleToggleClick} // 3. Use the new combined handler
      ref={ref}
      {...props} // Spread the rest of the props
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";