"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const authButtonBaseClass = "rounded-3xl border-gray-200 font-medium shadow-lg";
const desktopAuthButtonSizeClass =
  "px-7 py-4 text-sm xl:px-9 xl:py-5 xl:text-base";
const mobileAuthButtonSizeClass = "px-6 py-4 text-base";
const loginButtonColorClass =
  "bg-white text-[#D552A3] hover:bg-gray-100/60 hover:text-[#D552A3]";
const registerButtonColorClass =
  "bg-[#D552A3] text-white hover:bg-[#D552A3]/80 hover:text-white";
const softTransitionClass =
  "duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";
const burgerLineClass =
  `h-0.5 w-5 rounded-full bg-[#D552A3] transition-all ${softTransitionClass}`;
const burgerButtonClass =
  `flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#D552A3]/30 bg-white shadow-sm transition-all ${softTransitionClass} hover:bg-gray-100/60 hover:shadow-md active:scale-[0.97] active:bg-[#FDE9F4] active:shadow-sm min-[800px]:hidden`;

const authButtonClass = (...classes: string[]) =>
  [authButtonBaseClass, ...classes].join(" ");

const mobileMenuClass = (isOpen: boolean) =>
  [
    "overflow-hidden transition-all min-[800px]:hidden",
    softTransitionClass,
    isOpen
      ? "mt-4 max-h-52 translate-y-0 opacity-100"
      : "mt-0 max-h-0 -translate-y-3 opacity-0 pointer-events-none",
  ].join(" ");

const NavBar = () => {
  // Tracks whether the mobile burger menu is opened or closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#D552A3] px-4 py-3 min-[800px]:px-8 min-[800px]:py-2">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="flex items-center justify-between">
          {/* Logo links back to the home page. */}
          <Link href="/">
            <Image
              src="/white-logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="ml-1 h-14 w-14 scale-100 transition-all duration-300 hover:scale-110 min-[800px]:ml-5 min-[800px]:h-16 min-[800px]:w-16 min-[800px]:scale-110 min-[800px]:hover:scale-120 xl:h-20 xl:w-20"
            />
          </Link>

          {/* Burger button is visible only below 800px. */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className={burgerButtonClass}
          >
            {/* These three lines animate into an X when the menu opens. */}
            <span
              className={`${burgerLineClass} ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#D552A3] transition-opacity ${softTransitionClass} ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`${burgerLineClass} ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          {/* Desktop auth buttons are shown from 800px and wider. */}
          <div className="hidden items-center gap-3 min-[800px]:flex xl:gap-4">
            <Button
              variant="outline"
              className={authButtonClass(
                desktopAuthButtonSizeClass,
                loginButtonColorClass,
              )}
            >
              Вход
            </Button>
            <div className="h-8 w-1 rounded-full bg-[#FF70BF] opacity-25 xl:h-10" />
            <Button
              variant="outline"
              className={authButtonClass(
                desktopAuthButtonSizeClass,
                registerButtonColorClass,
              )}
            >
              Регистрация
            </Button>
          </div>
        </div>

        {/* Mobile menu appears below the navbar when the burger is opened. */}
        <div className={mobileMenuClass(isMenuOpen)}>
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className={authButtonClass(
                mobileAuthButtonSizeClass,
                loginButtonColorClass,
              )}
            >
              Вход
            </Button>
            <Button
              variant="outline"
              className={authButtonClass(
                mobileAuthButtonSizeClass,
                registerButtonColorClass,
              )}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
