import { ChevronDownIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

const BookingSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <details
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open === true)}
      className="group mb-6 w-full overflow-hidden rounded-2xl border border-[#FF70BF]/30 bg-white shadow-sm"
    >
      <summary className="relative flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 transition hover:bg-[#FFF8FD] sm:px-5 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0">
          <h3 className="mt-1 text-xl text-[#D552A3]">Запази час</h3>
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
    </details>
  );
};

export default BookingSection;
