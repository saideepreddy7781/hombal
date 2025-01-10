"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Handle theme change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-white bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 px-4 py-2 rounded"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
