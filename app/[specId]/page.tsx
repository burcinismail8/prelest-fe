"use client";
import React from "react";
import SpecialistCard from "../components/specialistPage/SpecialistCard";
import LocationMap from "../components/specialistPage/LocationMap";

const SpecialistProfilePage = () => {
  return (
    <div className="min-h-[800px] overflow-visible bg-linear-to-l from-[#FAD9EB] to-[#FFF8FD]">
      <SpecialistCard />
      <LocationMap />
    </div>
  );
};

export default SpecialistProfilePage;
