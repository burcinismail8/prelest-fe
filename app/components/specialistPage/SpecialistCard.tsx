"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpecialistCard = () => {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-xs flex-col items-center gap-4 px-4 sm:mt-10 sm:max-w-sm md:ml-12 md:mr-0 md:mt-12 md:w-fit md:min-w-[350px] md:px-0 lg:ml-15 lg:mt-15">
      <div className="flex flex-col items-center">
        <Image
          src="/hero-section.jpg"
          alt="Specialist Photo"
          width={250}
          height={250}
          className="h-40 w-40 rounded-full border-2 border-[#FF70BF]/30 object-cover sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-[250px] lg:w-[250px]"
        />
        <div className="mt-4 flex flex-col items-center sm:mt-5">
          <div className="text-xl text-[#FA2199] sm:text-2xl">Еда Исмет</div>
          <div className="my-2 h-0.5 w-16 bg-[#FF6DC7]/70 sm:w-20 md:my-3 md:w-24 lg:w-28 xl:w-32" />
          <div className="w-full max-w-xs text-center text-sm text-[#FF70BF] sm:max-w-sm sm:text-base md:w-[350px]">
            професионален грим, микроблейдинг, миглопластика
          </div>
        </div>
      </div>
      <div className="flex flex-col relative items-center bg-white p-3 pl-14 rounded-lg text-[#D552A3] border border-[#FF70BF]/30">
        <div className="flex items-center w-full min-h-10 text-sm md:text-base">
          <Image
            src="/icons/phone.svg"
            alt="Phone"
            width={25}
            height={25}
            className="mr-2 absolute left-4"
          />
          Телефон за връзка: 0800 000 000
        </div>
        <div className="flex items-center w-full min-h-10 text-sm md:text-base">
          <Image
            src="/icons/location.svg"
            alt="Address"
            width={35}
            height={35}
            className="absolute left-3"
          />
          Адрес: Асеновград, Пловдив
        </div>
        <div className="flex items-center w-full min-h-10 text-sm md:text-base">
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={23}
            height={23}
            className="absolute left-4"
          />
          Instagram:{}
          <Link
            href="https://www.instagram.com/phibrows_eda"
            className="ml-1 hover:underline"
          >
            phibrows_eda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
