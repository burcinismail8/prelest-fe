import React from "react";
import Image from "next/image";

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

      {/* Category cards: centered 3+2 on mobile/tablet, 5 across on desktop. */}
      <div className="grid w-full max-w-sm grid-cols-6 gap-4 sm:max-w-xl sm:gap-5 md:max-w-3xl md:gap-6 lg:max-w-5xl lg:grid-cols-5 lg:gap-5 xl:max-w-6xl xl:gap-8 2xl:max-w-7xl">
        {popularCategories.map((category, index) => (
          <div
            key={category.id}
            className={`col-span-2 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 lg:col-span-1 ${
              index === popularCategories.length - 2
                ? "col-start-2 lg:col-start-auto"
                : ""
            } ${
              index === popularCategories.length - 1
                ? "justify-self-center"
                : ""
            }`}
          >
            <div
              className={`rounded-full p-4 sm:p-6 md:p-7 lg:p-6 xl:p-8 ${index % 2 === 0 ? "bg-[#FF70BF]/50" : "bg-[#FF70BF]"}`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
                className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20"
              />
            </div>
            <p className="mt-3 text-xs text-[#FF70BF] sm:text-base md:mt-4 md:text-lg lg:text-base xl:text-lg">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
