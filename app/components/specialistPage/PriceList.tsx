"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const services = [
  { name: "Професионален грим", duration: "60 мин.", price: "100 €" },
  { name: "Микроблейдинг", duration: "60 мин.", price: "150 €" },
  { name: "Миглопластика", duration: "60 мин.", price: "200 €" },
  { name: "Професионален грим", duration: "60 мин.", price: "100 €" },
  { name: "Микроблейдинг", duration: "60 мин.", price: "150 €" },
  { name: "Миглопластика", duration: "60 мин.", price: "200 €" },
  { name: "Професионален грим", duration: "60 мин.", price: "100 €" },
  { name: "Микроблейдинг", duration: "60 мин.", price: "150 €" },
  { name: "Миглопластика", duration: "60 мин.", price: "200 €" },
];

const PriceList = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const syncOpenState = () => setIsOpen(desktopQuery.matches);

    syncOpenState();
    desktopQuery.addEventListener("change", syncOpenState);

    return () => desktopQuery.removeEventListener("change", syncOpenState);
  }, []);

  return (
    <details
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
      className="group mb-6 w-full overflow-hidden rounded-2xl border border-[#FF70BF]/30 bg-white shadow-sm"
    >
      <summary className="relative flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 transition hover:bg-[#FFF8FD] sm:px-5 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0">
          <h3 className="mt-1 text-xl text-[#D552A3]">Ценоразпис</h3>
          {/* <p className="mt-1 text-sm text-gray-500">
            {services.length} услуги с ориентировъчни цени
          </p> */}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Image
            src="/icons/shine-stars.svg"
            alt="sparkles"
            width={35}
            height={35}
            className="opacity-80"
          />
          <span className="flex size-9 items-center justify-center rounded-full bg-[#FAD9EB]/70 text-lg text-[#D552A3] transition group-open:rotate-180">
            <ChevronDownIcon className="w-4 h-4" />
          </span>
        </div>
      </summary>

      <div className="max-h-[320px] divide-y divide-pink-100 overflow-y-auto border-t border-[#FF70BF]/20 text-sm text-gray-600 lg:max-h-[420px]">
        {services.map((service, index) => (
          <div
            key={`${service.name}-${index}`}
            className="flex items-center justify-between gap-4 px-4 py-3 transition hover:bg-[#FFF8FD] sm:px-5 sm:py-4"
          >
            <div className="min-w-0">
              <p className="font-medium text-gray-700">{service.name}</p>
              <p className="mt-0.5 text-xs text-[#D552A3]/75">
                {service.duration}
              </p>
            </div>
            <p className="shrink-0 rounded-full bg-[#FAD9EB]/70 px-3 py-1 text-sm  text-[#D552A3]">
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </details>
  );
};

export default PriceList;
