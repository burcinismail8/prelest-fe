"use client";

import { ChevronDownIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { bg } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const availableTimes = [
  "09:00",
  "10:30",
  "13:00",
  "15:00",
  "16:30",
  "18:00",
  "19:30",
  "21:00",
  "22:30",
];

/**
 * Date-keyed booking map.
 *
 * Each key is an ISO-like date string in yyyy-MM-dd format and each value is
 * the list of already booked time slots for that day. This shape mirrors a
 * simple API response, so the mock can later be swapped for server data.
 */
const bookedSlotsByDate: Record<string, string[]> = {
  "2026-05-11": ["10:30", "16:30"],
  "2026-05-12": [
    "09:00",
    "10:30",
    "13:00",
    "15:00",
    "16:30",
    "18:00",
    "19:30",
    "21:00",
    "22:30",
  ],
  "2026-05-13": ["13:00"],
};

type TimeSlot = {
  time: string;
  isBooked: boolean;
};

const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");

const getBookedSlotsForDate = (date: Date) =>
  bookedSlotsByDate[getDateKey(date)] ?? [];

const buildTimeSlotsForDate = (date: Date): TimeSlot[] => {
  const bookedSlots = new Set(getBookedSlotsForDate(date));

  return availableTimes.map((time) => ({
    time,
    isBooked: bookedSlots.has(time),
  }));
};

const BookingSection = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  // Stores the calendar day the client wants to book.
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

  // Stores the currently selected appointment time chip.
  const [selectedTime, setSelectedTime] = React.useState("");

  const isScheduleLoading = false;

  const timeSlotsForSelectedDate = React.useMemo(() => {
    if (!selectedDate || isScheduleLoading) return [];

    return buildTimeSlotsForDate(selectedDate);
  }, [selectedDate, isScheduleLoading]);

  const availableSlots = React.useMemo(
    () => timeSlotsForSelectedDate.filter((slot) => !slot.isBooked),
    [timeSlotsForSelectedDate],
  );

  const hasAvailableSlots = availableSlots.length > 0;

  // Past dates and Sundays cannot be booked.
  const isDateUnavailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date < today || date.getDay() === 0;
  };

  // Choosing a new date clears the previous time choice.
  const handleDateSelection = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  // Chips compare their time value with selectedTime to render the active state.
  const handleTimeSelection = (slot: TimeSlot) => {
    if (slot.isBooked) return;

    setSelectedTime(slot.time);
  };

  // The CTA stays inactive until the client chooses both a valid date and time.
  const canBookAppointment = Boolean(selectedDate && selectedTime);

  return (
    <details
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open === true)}
      className="group mb-6 w-full overflow-hidden rounded-2xl border border-[#FF70BF]/30 bg-white shadow-sm"
    >
      <summary className="relative flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 transition hover:bg-[#FFF8FD] sm:px-5 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0">
          <h3 className="mt-1 text-xl text-[#D552A3]">Запази час</h3>
          {/* <p className="mt-1 text-sm text-gray-500">
        {services.length} услуги с ориентировъчни цени
      </p> */}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Image
            src="/icons/shine-stars.svg"
            alt="sparkles"
            width={35}
            height={35}
            className="opacity-80"
          />
          <span className="flex size-9 items-center justify-center rounded-full bg-[#FAD9EB]/70 text-lg text-[#D552A3] transition group-open:rotate-180">
            <ChevronDownIcon className="w-4 h-4" />
          </span>
        </div>
      </summary>

      <div className="border-t border-[#FF70BF]/20 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-medium text-slate-600">
              Избери дата
            </h4>
            <Calendar
              mode="single"
              locale={bg}
              selected={selectedDate}
              onSelect={handleDateSelection}
              disabled={isDateUnavailable}
              className="mx-auto rounded-2xl border border-pink-100 bg-[#FFF8FD] p-3"
              classNames={{
                day: "text-[#5E4D57]",
                disabled: "text-[#5E4D57] opacity-20",
                today:
                  "rounded-md border border-[#D552A3]/30 bg-white text-[#5E4D57]",
                // Keep the calendar clean: no browser/shadcn focus ring or gray shadow on day cells.
                day_button:
                  "text-[#5E4D57] outline-none ring-0 shadow-none transition-colors duration-150 hover:bg-[#f9c4e1]/60 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[selected-single=true]:bg-[#D552A3] data-[selected-single=true]:text-white data-[selected-single=true]:shadow-none",
              }}
            />
          </div>

          <div className="flex flex-col">
            <h4 className="mb-3 text-sm font-medium text-slate-600">
              Избери час
            </h4>

            {selectedDate && hasAvailableSlots ? (
              <div className="grid grid-cols-2 gap-3">
                {timeSlotsForSelectedDate.map((slot) => {
                  const isSelected = selectedTime === slot.time;

                  return (
                    <button
                      key={slot.time}
                      type="button"
                      aria-pressed={isSelected}
                      disabled={slot.isBooked}
                      onClick={() => handleTimeSelection(slot)}
                      className={cn(
                        "min-h-11 rounded-full border px-5 py-2.5 text-sm font-medium outline-none transition-colors duration-150 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                        !slot.isBooked &&
                          "border-[#FAD9EB] bg-white text-[#D552A3] hover:bg-[#f6b0e2] hover:shadow-[0_0_18px_rgba(213,82,163,0.18)]",
                        isSelected &&
                          "border-transparent bg-[#D552A3] text-white",
                        slot.isBooked &&
                          "cursor-not-allowed bg-slate-100 text-slate-400 opacity-40 line-through",
                      )}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            ) : selectedDate ? (
              <p className="rounded-xl bg-[#FFF8FD] px-4 py-3 text-sm text-gray-500">
                {isScheduleLoading
                  ? "Зареждаме свободните часове..."
                  : "За тази дата няма свободни часове. Моля, избери друг ден."}
              </p>
            ) : (
              <p className="rounded-xl bg-[#FFF8FD] px-4 py-3 text-sm text-gray-500">
                Първо избери дата, за да видиш свободните часове.
              </p>
            )}

            <Button
              type="button"
              disabled={!canBookAppointment}
              className={cn(
                "mt-6 w-full rounded-full bg-[#D552A3] text-white transition-colors duration-150 hover:bg-[#C14593] active:bg-[#B83D86]",
                !canBookAppointment &&
                  "cursor-not-allowed bg-slate-200 text-slate-500 hover:bg-slate-200",
              )}
            >
              {selectedTime ? `Запази за ${selectedTime}ч.` : "Потвърди часа"}
            </Button>
          </div>
        </div>
      </div>
    </details>
  );
};

export default BookingSection;
