import { useEffect, useState } from "react";
import ArrowDown from "../assets/svgs/ArrowDown";

interface Props {
  placeholder: string;
  items: Item[];
  onChange?: (value: string) => void;
}

type Item = {
  key: string;
  value: string;
};

export default function Dropdown({ placeholder, items, onChange }: Props) {
  const [openList, setOpenList] = useState(false);
  const [value, setValue] = useState("");

  // console.log({ value });

  return (
    <>
      <div
        id="custom__dropdown"
        className="relative flex h-10 w-full items-center rounded-xl px-3 "
        onClick={(e) => {
          setOpenList(!openList);
        }}
      >
        <div
          className={`flex-grow ${
            !value ? "text-[#2d281c] text-opacity-60" : ""
          }`}
        >
          {value || placeholder}
        </div>
        <ArrowDown />

        {openList && (
          <div className="absolute right-0 left-0 top-[38px] z-10 rounded-lg border border-[#2d281c99] bg-white text-sm">
            {items.map((item) => (
              <div
                key={item.key}
                className="px-3 py-1 first:rounded-t-lg  last:rounded-b-lg hover:bg-[#e4e4de]"
                onClick={() => {
                  setValue(item.value);
                  onChange?.(item.key);
                }}
              >
                {item.value}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
