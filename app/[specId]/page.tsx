"use client";
import React from "react";
import SpecialistCard from "../components/specialistPage/SpecialistCard";
import LocationMap from "../components/specialistPage/LocationMap";
import Gallery from "../components/specialistPage/Gallery";
import PriceList from "../components/specialistPage/PriceList";
import BookingSection from "../components/specialistPage/BookingSection";

const SpecialistProfilePage = () => {
  return (
    <div className="min-h-[800px] overflow-visible bg-linear-to-l from-[#FAD9EB] to-[#FFF8FD] flex flex-col md:flex-row">
      <div className="mr-6">
        <SpecialistCard />
        <LocationMap />
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          <BookingSection />
          <PriceList />
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default SpecialistProfilePage;
