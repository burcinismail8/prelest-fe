import React from "react";
import Image from "next/image";
import Link from "next/link";

const popularCategories = [
  {
    id: 1,
    name: "Грим",
    image: "/icons/brush.svg",
  },
  {
    id: 2,
    name: "Маникюр",
    image: "/icons/nail-polish.svg",
  },
  {
    id: 3,
    name: "Миглопластика",
    image: "/icons/eyelashes.svg",
  },
  {
    id: 4,
    name: "Фризьор",
    image: "/icons/hairstyle.svg",
  },
  {
    id: 5,
    name: "Козметика",
    image: "/icons/skincare.svg",
  },
];

const PopularCategories = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 px-4 pb-10 pt-16 text-center font-yeseva-one sm:px-6 sm:pb-12 sm:pt-18 md:px-8 md:py-14 lg:px-10 lg:py-16 xl:px-12 xl:py-20 2xl:px-16">
      {/* Decorative sparkle icon. It grows and moves out on wider screens. */}
      <Image
        src="/icons/shine-stars.svg"
        alt="sparkles"
        width={80}
        height={80}
        className="absolute right-4 top-4 h-10 w-10 sm:right-8 sm:top-2 sm:h-14 sm:w-14 md:right-10 md:top-6 md:h-16 md:w-16 lg:right-16 lg:h-20 lg:w-20 xl:right-24 2xl:right-32"
      />

      {/* Text block stays centered on mobile and gets roomier on desktop. */}
      <div className="mb-5 flex max-w-4xl flex-col items-center justify-center gap-3 sm:mb-6 md:mb-8 md:gap-4 lg:mb-10">
        <h3 className="text-2xl text-[#FF6DC7] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
          Популярни категории
        </h3>
        <div className="my-2 h-0.5 w-16 bg-[#FF6DC7]/70 sm:w-20 md:my-3 md:w-24 lg:w-28 xl:w-32" />
        <p className="max-w-xl text-sm leading-6 text-[#FF6DC7]/60 sm:text-base md:max-w-2xl md:text-lg lg:text-lg xl:max-w-3xl 2xl:text-xl">
          Разгледай най-предпочитаните услуги и запази час при топ специалисти
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 w-2/3">
        {popularCategories.map((category, index) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
          >
            <div
              className={`bg-[#FF70BF] rounded-full p-8 ${index % 2 === 0 ? "bg-[#FF70BF]/50" : "bg-[#FF70BF]"}`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
              />
            </div>
            <p className="text-lg text-[#FF70BF] mt-4">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
