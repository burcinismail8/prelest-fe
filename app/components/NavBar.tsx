import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2 border-b border-[#D552A3]">
      <Link href="/">
        <Image
          src="/white-logo.svg"
          alt="logo"
          width={150}
          height={150}
          className="ml-5 h-20 w-20 scale-110 hover:scale-120 transition-all duration-300"
        />
      </Link>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="bg-white text-[#D552A3] hover:bg-gray-100/60 rounded-3xl border-gray-200 py-6 px-14 shadow-lg text-lg font-medium hover:text-[#D552A3]"
        >
          Вход
        </Button>
        <div className="w-1 h-12 bg-[#FF70BF] rounded-full opacity-25" />
        <Button
          variant="outline"
          className="bg-[#D552A3] text-white hover:bg-[#D552A3]/80 rounded-3xl border-gray-200 py-6 px-14 shadow-lg text-lg font-medium hover:text-white"
        >
          Регистрация
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
