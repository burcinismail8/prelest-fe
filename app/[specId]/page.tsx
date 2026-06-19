"use client";
import React, { useEffect, useState } from "react";
import SpecialistCard from "../components/specialistPage/SpecialistCard";
import LocationMap from "../components/specialistPage/LocationMap";
import Gallery from "../components/specialistPage/Gallery";
import PriceList from "../components/specialistPage/PriceList";
import BookingSection from "../components/specialistPage/BookingSection";
import { fetchSalonDetails } from "../api";
import { ISalon } from "../types";

const SpecialistProfilePage = () => {
  const [salon, setSalon] = useState<ISalon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchSalonDetails(
          "550e8400-e29b-41d4-a716-446655440000",
        );
        setSalon(data);
      } catch (error) {
        console.error("Failed to load salon data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  if (loading) {
    return (
      <div className="flex min-h-200 items-center justify-center bg-linear-to-l from-[#FAD9EB] to-[#FFF8FD]">
        <div className="text-lg font-medium text-[#pink-600] animate-pulse">
          Loading salon details...
        </div>
      </div>
    );
  }
  if (!salon) {
    return (
      <div className="flex min-h-200 items-center justify-center bg-linear-to-l from-[#FAD9EB] to-[#FFF8FD]">
        <div className="text-lg font-medium text-gray-600">
          Salon not found. Please check the ID.
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-200 flex-col overflow-visible bg-linear-to-l from-[#FAD9EB] to-[#FFF8FD] md:flex-row">
      <div className="md:mr-6">
        <SpecialistCard />
        <LocationMap />
      </div>
      <div className="mt-8 flex flex-col justify-between pb-8 min-w-0 px-4 md:px-0 md:pr-6">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="min-w-0 flex-1 lg:flex-[1.7]">
            <BookingSection />
          </div>
          <div className="w-full lg:w-90 xl:w-105">
            <PriceList />
          </div>
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default SpecialistProfilePage;
