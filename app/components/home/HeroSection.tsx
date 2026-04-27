import { Button } from "@/components/ui/button";
import Image from "next/image";
import CustomComboBox from "./CustomComboBox";

const heroImage = {
  src: "/hero-section.jpg",
  alt: "Hero Section",
};

const serviceOptions = [
  "Масаж",
  "Грим",
  "Фризьор",
  "Маникюр",
  "Педикюр",
  "Фитнес",
  "Миглопластика",
  "Друго",
];

const cityOptions = [
  "София",
  "Пловдив",
  "Асеновград",
  "Варна",
  "Бургас",
  "Русе",
  "Друго",
];

const sectionClass =
  "overflow-visible bg-linear-to-l from-[#FAD9EB] to-[#FFF8FD]";
const containerClass =
  "mx-auto flex min-h-[calc(100svh-50px)] w-full max-w-[1600px] flex-col items-center gap-8 overflow-visible px-5 pt-10 pb-28 text-center sm:px-10 sm:pt-14 sm:pb-32 lg:min-h-[calc(100svh-120px)] lg:flex-row lg:justify-between lg:gap-10 lg:px-14 lg:py-12 lg:pb-20 lg:text-left xl:px-16";
const contentClass =
  "flex w-full max-w-3xl flex-col items-center justify-center lg:w-1/2 lg:items-start";
const mobileImageClass =
  "mb-4 aspect-square w-[160px] rounded-full object-cover shadow-xl sm:w-[220px] lg:hidden";
const titleClass =
  "my-5 text-4xl leading-tight text-[#FA2199] sm:my-6 sm:text-5xl lg:mb-6 lg:text-4xl xl:max-w-4xl xl:text-5xl";
const dividerClass =
  "h-1 w-full max-w-3xl bg-[#FFCEEC] opacity-50";
const descriptionClass =
  "mt-5 max-w-3xl text-base leading-relaxed text-[#FF6DC7] sm:mt-6 sm:text-xl lg:mt-6 lg:text-lg xl:text-xl";
const formClass = "mt-6 flex w-full flex-col gap-3 sm:gap-4";
const ctaButtonClass =
  "mt-6 w-full rounded-md bg-[#FF70BF]/80 px-8 py-5 text-base text-white hover:bg-[#FF70BF] sm:w-auto sm:px-10 sm:py-6 sm:text-lg lg:px-8 lg:py-5 lg:text-base xl:text-lg";
const desktopImageWrapperClass =
  "hidden w-full items-center justify-center lg:flex lg:w-1/2";
const desktopImageClass =
  "aspect-square w-[300px] rounded-full object-cover xl:w-[340px]";

const HeroSection = () => {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className={contentClass}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={260}
            height={260}
            priority
            sizes="(min-width: 1024px) 0px, (min-width: 640px) 220px, 180px"
            className={mobileImageClass}
          />
          <h1 className={titleClass}>Всичко за теб в един график.</h1>
          <div className={dividerClass} />
          <p className={descriptionClass}>
            Потопи се в света на Прелест, където всяка резервация е стъпка към
            твоето по-добро аз – лесно, интуитивно и изцяло съобразено с твоя
            ритъм.
          </p>
          <div className={formClass}>
            <CustomComboBox
              placeholder="Избери услуга или специалист"
              options={serviceOptions}
            />
            <CustomComboBox
              placeholder="Избери населено място"
              options={cityOptions}
            />
          </div>
          <Button className={ctaButtonClass}>Намери</Button>
        </div>

        <div className={desktopImageWrapperClass}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={900}
            height={900}
            priority
            sizes="(min-width: 2560px) 700px, (min-width: 1280px) 420px, (min-width: 1024px) 360px, 0px"
            className={desktopImageClass}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
