"use client";

import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

type CustomComboBoxProps = {
  placeholder: string;
  options: string[];
};

const inputGroupClass =
  "h-12 w-full rounded-lg border-[#D552A3]/60 bg-white px-4 text-[#D552A3] shadow-none sm:h-14 sm:px-6 has-[[data-slot=input-group-control]:focus-visible]:border-[#D552A3]/60! has-[[data-slot=input-group-control]:focus-visible]:ring-0!";
const inputClass =
  "text-base! placeholder:text-[#D552A3] focus-visible:ring-0! sm:text-lg! md:text-lg!";
const contentClass = "bg-white text-base shadow-lg sm:text-lg";
const itemClass =
  "p-2 text-sm text-[#D552A3] sm:text-base data-highlighted:bg-[#FFE2F4]! data-highlighted:text-[#D552A3]!";
const collisionAvoidance = {
  side: "none",
  align: "shift",
  fallbackAxisSide: "none",
} as const;

const CustomComboBox = ({ placeholder, options }: CustomComboBoxProps) => {
  // Base UI measures the dropdown from its anchor. We anchor it to this
  // full-width wrapper so the popup matches the visible combobox width.
  const anchorRef = React.useRef<HTMLDivElement>(null);

  return (
    <Combobox items={options}>
      <div ref={anchorRef} className="w-full">
        <ComboboxInput
          placeholder={placeholder}
          className={inputGroupClass}
          inputClassName={inputClass}
        />
      </div>
      <ComboboxContent
        anchor={anchorRef}
        // Keep the menu below the input. Without this, Base UI can flip it
        // above the field when it thinks there is not enough space.
        collisionAvoidance={collisionAvoidance}
        className={contentClass}
      >
        <ComboboxEmpty>Няма намерени резултати.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item} className={itemClass}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CustomComboBox;
