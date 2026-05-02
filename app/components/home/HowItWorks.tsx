import Image from "next/image";

const steps = [
  {
    id: 1,
    icon: "/icons/research.svg",
    title: "Открий",
    text: "Намери най-добрите салони и специалисти в твоя град с няколко клика.",
  },
  {
    id: 2,
    icon: "/icons/calendar.svg",
    title: "Резервирай",
    text: "Избери удобен за теб час и запази мястото си веднага.",
  },
  {
    id: 3,
    icon: "/icons/check-mark.svg",
    title: "Готово!",
    text: "Остави всичко в ръцете на експертите и се потопи в заслуженото време за красота.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative flex flex-col bg-[#FFB1DC] items-center justify-center gap-4 px-4 pb-10 pt-16 text-center font-yeseva-one sm:px-6 sm:pb-12 sm:pt-18 md:px-8 md:py-14 lg:px-10 lg:py-16 xl:px-12 xl:py-20 2xl:px-16">
      {/* Decorative sparkle icon. It grows and moves out on wider screens. */}
      <Image
        src="/icons/shine-stars.svg"
        alt="sparkles"
        width={80}
        height={80}
        className="absolute left-4 top-4 h-10 w-10 sm:right-8 sm:top-2 sm:h-14 sm:w-14 md:right-10 md:top-6 md:h-16 md:w-16 lg:right-16 lg:h-20 lg:w-20 xl:right-24 xl:left-32 2xl:right-32"
      />

      {/* Text block stays centered on mobile and gets roomier on desktop. */}
      <div className="mb-5 flex flex-col items-center justify-center gap-3 sm:mb-6 md:mb-8 md:gap-4 lg:mb-10">
        <h3 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
          Открий. Резервирай. Сияй.
        </h3>
        <div className="my-2 h-0.5 w-16 bg-white sm:w-20 md:my-3 md:w-24 lg:w-28 xl:w-32" />
        <p className="text-sm leading-6 text-white sm:text-base  md:text-lg lg:text-lg 2xl:text-xl">
          Всички салони и процедури на едно място. Бързо, лесно и винаги под
          ръка.
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row w-3/4 justify-between">
        {steps.map((step) => {
          return (
            <div
              key={step.id}
              className="flex flex-col w-full lg:w-1/3 items-center justify-between rounded-3xl bg-white px-8 pt-12 pb-6 text-center text-[#FF70BF] shadow-lg/30 shadow-white"
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={80}
                height={80}
                className="mb-4 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20"
              />
              <div className="my-4 h-px w-2/3 bg-[#FF70BF]/35 sm:w-28 md:w-36 lg:w-44" />
              <h4 className="text-lg leading-none sm:text-md md:text-xl xl:text-2xl text-[#E446A8]">{`${step.id}. ${step.title}`}</h4>
              <p className="mt-2 min-h-16 lg:min-h-24 text-sm xl:text-base">
                {" "}
                {step.text}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
