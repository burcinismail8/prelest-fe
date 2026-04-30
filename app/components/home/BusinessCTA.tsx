import Link from "next/link";
import React from "react";
import Image from "next/image";

const BusinessCTA = () => {
  return (
    <div className="flex flex-col relative items-center justify-center gap-4 px-4 py-12 font-yeseva-one">
      <Image
        src="/icons/shine-stars.svg"
        alt="sparkles"
        width={80}
        height={80}
        className="absolute top-6 right-10"
      />
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <h3 className="text-[#FF6DC7] text-4xl">Развий своя бизнес с нас</h3>
        <div className="w-1/6 h-0.5 bg-[#FF6DC7]/70 my-3"></div>
        <p className="text-[#FF6DC7]/60 text-xl w-2/3 text-center">
          Присъедини своя салон към Прелест. Направи графика си достъпен за нови
          клиенти и управлявай резервациите си на едно място.
        </p>
      </div>
      <Link
        href="#"
        className="bg-[#FF70BF] shadow-lg shadow-[#FF70BF]/70 rounded-xl text-xl py-4 px-20 text-white hover:bg-[#FF70BF]/80"
      >
        Свържи се с нас
      </Link>
    </div>
  );
};

export default BusinessCTA;
