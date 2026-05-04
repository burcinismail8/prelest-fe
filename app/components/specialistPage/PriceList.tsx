import Image from "next/image";
import React from "react";

const PriceList = () => {
  return (
    <div className="bg-white relative rounded-xl py-3 border border-pink-200 md:min-w-[350px] xl:min-w-[450px] mb-6 mx-2 lg:mx-0">
      <Image
        src="/icons/shine-stars.svg"
        alt="sparkles"
        width={35}
        height={35}
        className="absolute right-4 top-2"
      />
      <h3 className="text-lg text-[#D552A3] mb-3 border-b border-pink-200 px-4 pb-2">
        Ценоразпис
      </h3>
      <div className="max-h-[200px] lg:max-h-[400px] overflow-y-auto text-xs md:text-sm lg:text-base text-gray-600">
        <div className="flex justify-between items-center p-2 pt-0 border-b border-pink-200">
          <p>Професионален грим (60 мин.)</p>
          <p>100 €</p>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-pink-200">
          <p>Микроблейдинг (60 мин.)</p>
          <p>150 €</p>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-pink-200">
          <p>Миглопластика (60 мин.)</p>
          <p>200 €</p>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-pink-200">
          <p>Професионален грим (60 мин.)</p>
          <p>100 €</p>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-pink-200">
          <p>Микроблейдинг (60 мин.)</p>
          <p>150 €</p>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-pink-200">
          <p>Миглопластика (60 мин.)</p>
          <p>200 €</p>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-pink-200">
          <p>Професионален грим (60 мин.)</p>
          <p>100 €</p>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-pink-200">
          <p>Микроблейдинг (60 мин.)</p>
          <p>150 €</p>
        </div>
        <div className="flex justify-between items-center p-2 pb-0">
          <p>Миглопластика (60 мин.)</p>
          <p>200 €</p>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
