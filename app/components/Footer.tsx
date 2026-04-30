import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#D552A3]/35 text-[#C04993] px-4 py-3 min-[800px]:px-8 min-[800px]:py-2 flex flex-col">
      <div className="flex justify-between items-center gap-4 min-h-[100px] mb-3">
        <div className="flex w-1/3 items-center justify-center">
          <Image src="/white-logo.svg" alt="logo" width={180} height={180} />
        </div>
        <div className="flex flex-col w-1/3 px-8 justify-center border-r-2 border-l-2 border-[#D552A3]/35">
          <p className="text-md text-[#9C8C95] mb-3">За Бизнеса</p>
          <div className="text-lg gap-2 flex flex-col">
            <Link
              href="#"
              className="flex items-center gap-2 hover:text-[#D552A3] hover:underline"
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
              className="flex items-center gap-2 hover:text-[#D552A3] hover:underline"
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
              className="flex items-center gap-2 hover:text-[#D552A3] hover:underline"
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
        <div className="flex flex-col w-1/3 px-5 justify-center">
          <p className="text-md text-[#9C8C95] mb-3">Информация</p>
          <div className="text-lg gap-2 flex flex-col">
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
      <div className="flex justify-between items-center flex-col text-sm">
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
