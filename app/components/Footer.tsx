import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#D552A3]/35 px-4 py-6 text-[#C04993] sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:grid md:grid-cols-3 md:items-center md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
        <div className="flex items-center justify-center md:justify-start">
          <Image
            src="/white-logo.svg"
            alt="logo"
            width={180}
            height={180}
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 2xl:h-40 2xl:w-40"
          />
        </div>
        <div className="flex flex-col border-y-2 border-[#D552A3]/35 py-6 text-center md:border-x-2 md:border-y-0 md:px-6 md:py-0 md:text-left lg:px-8 xl:px-10 2xl:px-12">
          <p className="mb-3 text-sm text-[#9C8C95] lg:text-base xl:text-lg">
            За Бизнеса
          </p>
          <div className="flex flex-col gap-2 text-base lg:text-lg xl:text-xl">
            <Link
              href="#"
              className="flex items-center justify-center gap-2 hover:text-[#D552A3] hover:underline md:justify-start"
            >
              Добави своя салон
              <Image
                src="/icons/left-arrow.svg"
                alt="add-salon"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 hover:text-[#D552A3] hover:underline md:justify-start"
            >
              Нашите услуги
              <Image
                src="/icons/left-arrow.svg"
                alt="our-services"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 hover:text-[#D552A3] hover:underline md:justify-start"
            >
              Стани партньор
              <Image
                src="/icons/left-arrow.svg"
                alt="become-partner"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-center md:px-4 md:text-left lg:px-6 xl:px-8 2xl:px-10">
          <p className="mb-3 text-sm text-[#9C8C95] lg:text-base xl:text-lg">
            Информация
          </p>
          <div className="flex flex-col gap-2 text-base lg:text-lg xl:text-xl">
            <div>
              <Link href="#" className="hover:text-[#D552A3] hover:underline">
                За нас
              </Link>
            </div>
            <div>
              <Link href="#" className="hover:text-[#D552A3] hover:underline">
                Контакти
              </Link>
            </div>
            <div>
              <Link href="#" className="hover:text-[#D552A3] hover:underline">
                Правна информация
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 lg:mt-10 flex w-full max-w-[1600px] items-center justify-between gap-2 text-center text-xs lg:text-sm flex-col md:text-left xl:text-base">
        <div>
          <Link href="#" className="hover:text-[#D552A3] hover:underline">
            Общи условия
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-[#D552A3] hover:underline">
            Политика за поверителност
          </Link>
        </div>
        <div>© 2026 Прелест. Всички права запазени.</div>
      </div>
    </div>
  );
};

export default Footer;
