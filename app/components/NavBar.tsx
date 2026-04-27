"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  // Tracks whether the mobile burger menu is opened or closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#D552A3] px-4 py-3 min-[800px]:px-8 min-[800px]:py-2">
      <div className="flex items-center justify-between">
        {/* Logo links back to the home page. */}
        <Link href="/">
          <Image
            src="/white-logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="ml-1 h-14 w-14 scale-100 transition-all duration-300 hover:scale-110 min-[800px]:ml-5 min-[800px]:h-20 min-[800px]:w-20 min-[800px]:scale-110 min-[800px]:hover:scale-120"
          />
        </Link>

        {/* Burger button is visible only below 800px. */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#D552A3]/30 bg-white shadow-sm transition-colors hover:bg-gray-100/60 min-[800px]:hidden"
        >
          {/* These three lines animate into an X when the menu opens. */}
          <span
            className={`h-0.5 w-5 rounded-full bg-[#D552A3] transition-transform ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[#D552A3] transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[#D552A3] transition-transform ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Desktop auth buttons are shown from 800px and wider. */}
        <div className="hidden items-center gap-3 min-[800px]:flex min-[1500px]:gap-4">
          <Button
            variant="outline"
            className="rounded-3xl border-gray-200 bg-white px-10 py-5 text-base font-medium text-[#D552A3] shadow-lg hover:bg-gray-100/60 hover:text-[#D552A3] min-[1500px]:px-14 min-[1500px]:py-6 min-[1500px]:text-lg"
          >
            Вход
          </Button>
          <div className="h-9 w-1 rounded-full bg-[#FF70BF] opacity-25 min-[1500px]:h-12" />
          <Button
            variant="outline"
            className="rounded-3xl border-gray-200 bg-[#D552A3] px-10 py-5 text-base font-medium text-white shadow-lg hover:bg-[#D552A3]/80 hover:text-white min-[1500px]:px-14 min-[1500px]:py-6 min-[1500px]:text-lg"
          >
            Регистрация
          </Button>
        </div>
      </div>

      {/* Mobile menu appears below the navbar when the burger is opened. */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-3 min-[800px]:hidden">
          <Button
            variant="outline"
            className="rounded-3xl border-gray-200 bg-white px-6 py-4 text-base font-medium text-[#D552A3] shadow-lg hover:bg-gray-100/60 hover:text-[#D552A3]"
          >
            Вход
          </Button>
          <Button
            variant="outline"
            className="rounded-3xl border-gray-200 bg-[#D552A3] px-6 py-4 text-base font-medium text-white shadow-lg hover:bg-[#D552A3]/80 hover:text-white"
          >
            Регистрация
          </Button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
