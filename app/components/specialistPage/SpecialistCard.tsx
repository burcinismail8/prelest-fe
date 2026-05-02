"use client";
import Image from "next/image";
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
      <div>info-container</div>
    </div>
  );
};

export default SpecialistCard;
