import React from "react";

const LocationMap = () => {
  const specialist = {
    name: "Еда Исмет",
    address: "Асеновград, Пловдив",
    lat: 42.0036,
    lng: 24.8742,
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${specialist.lat},${specialist.lng}`;

  return (
    <section className="mx-auto mt-5 w-full max-w-[min(100%,22rem)] px-4 pb-8 sm:max-w-sm md:ml-12 md:mr-0 md:mt-6 md:max-w-[350px] md:px-0 lg:ml-15">
      <div className="overflow-hidden rounded-2xl border border-[#FF70BF]/30 bg-white shadow-sm">
        <div className="h-52 w-full overflow-hidden border-y border-[#FF70BF]/20 sm:h-60 md:h-64">
          <iframe
            title="Локация на салон Прелест"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${specialist.lat},${specialist.lng}&z=15&output=embed`}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="p-4">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-[#D552A3] px-4 py-3 text-sm text-white shadow-sm transition hover:bg-[#FA2199] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FA2199]"
          >
            Отвори в Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
