"use client";
import React from "react";
import SpecialistCard from "../components/specialistPage/SpecialistCard";
import LocationMap from "../components/specialistPage/LocationMap";
import Gallery from "../components/specialistPage/Gallery";
import PriceList from "../components/specialistPage/PriceList";
import BookingSection from "../components/specialistPage/BookingSection";

const SpecialistProfilePage = () => {
  return (
    <div className="flex min-h-[800px] flex-col overflow-visible bg-linear-to-l from-[#FAD9EB] to-[#FFF8FD] md:flex-row">
      <div className="md:mr-6">
        <SpecialistCard />
        <LocationMap />
      </div>
      <div className="mt-8 flex flex-col justify-between pb-8 min-w-0 px-4 md:px-0 md:pr-6">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="min-w-0 flex-1 lg:flex-[1.7]">
            {/* <BookingSection /> */}
          </div>
          <div className="w-full lg:w-[360px] xl:w-[420px]">
            <PriceList />
          </div>
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default SpecialistProfilePage;
