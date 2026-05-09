import React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const portfolioItems = [
  {
    name: "Нежен маникюр",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Спа грижа",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Грим",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Терапия за лице",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Прическа",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
  },
];

const Gallery = () => {
  return (
    <section className="mt-8 w-full overflow-hidden">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {portfolioItems.map((item) => (
            <CarouselItem
              key={item.name}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="h-full">
                <Card className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-rose-100 p-0 shadow-[0_10px_20px_rgba(255,182,193,0.3)]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-rose-950/55 via-rose-900/25 to-transparent p-5">
                    <h3 className="font-serif text-lg text-white drop-shadow-sm">
                      {item.name}
                    </h3>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 z-10 hidden border-rose-200 bg-white/85 text-rose-400 shadow-md shadow-rose-100/70 backdrop-blur hover:bg-rose-50 hover:text-rose-500 md:flex" />
        <CarouselNext className="right-3 z-10 hidden border-rose-200 bg-white/85 text-rose-400 shadow-md shadow-rose-100/70 backdrop-blur hover:bg-rose-50 hover:text-rose-500 md:flex" />
      </Carousel>
    </section>
  );
};

export default Gallery;
