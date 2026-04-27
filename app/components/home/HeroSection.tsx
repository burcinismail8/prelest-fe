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
  "mx-auto flex min-h-[calc(100svh-50px)] w-full max-w-[2200px] flex-col items-center justify-start gap-8 overflow-visible px-5 pt-10 pb-28 text-center sm:px-10 sm:pt-14 sm:pb-32 lg:min-h-[calc(100svh-120px)] lg:flex-row lg:justify-between lg:gap-12 lg:py-16 lg:pb-28 lg:text-left xl:px-20 min-[2560px]:max-w-[3000px] min-[2560px]:gap-20 min-[2560px]:px-36";
const contentClass =
  "flex w-full max-w-3xl flex-col items-center justify-center lg:w-1/2 lg:items-start min-[2560px]:max-w-5xl";
const mobileImageClass =
  "mb-4 aspect-square w-[160px] rounded-full object-cover shadow-xl sm:w-[220px] lg:hidden";
const titleClass =
  "my-5 text-[clamp(2.25rem,10vw,4rem)] leading-tight text-[#FA2199] sm:my-6 lg:mb-8 lg:text-[clamp(2.75rem,4vw,4rem)] xl:max-w-4xl min-[2560px]:mb-12 min-[2560px]:text-[clamp(6rem,4vw,8rem)]";
const dividerClass =
  "h-1 w-full max-w-3xl bg-[#FFCEEC] opacity-50 min-[2560px]:h-1.5 min-[2560px]:max-w-5xl";
const descriptionClass =
  "mt-5 max-w-3xl text-[clamp(1rem,4vw,1.375rem)] leading-relaxed text-[#FF6DC7] sm:mt-6 lg:mt-8 lg:text-[clamp(1.125rem,1.5vw,1.5rem)] min-[2560px]:mt-12 min-[2560px]:max-w-5xl min-[2560px]:text-[clamp(2.25rem,1.4vw,3rem)]";
const formClass = "mt-6 flex w-full flex-col gap-3 sm:gap-4";
const ctaButtonClass =
  "mt-6 w-full rounded-md bg-[#FF70BF]/80 px-8 py-5 text-base text-white hover:bg-[#FF70BF] sm:w-auto sm:px-10 sm:py-6 sm:text-lg lg:text-xl xl:text-2xl min-[2560px]:mt-16 min-[2560px]:px-16 min-[2560px]:py-9 min-[2560px]:text-4xl";
const desktopImageWrapperClass =
  "hidden w-full items-center justify-center lg:flex lg:w-1/2 min-[2560px]:w-2/5";
const desktopImageClass =
  "aspect-square w-[min(30vw,380px)] rounded-full object-cover xl:w-[420px] min-[2560px]:w-[700px]";

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
