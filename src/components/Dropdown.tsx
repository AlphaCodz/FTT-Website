import { useState } from "react";
import ArrowDown from "../assets/svgs/ArrowDown";
import { Dropdown as AntdDropdown, Space } from "antd";
import type { MenuProps } from "antd";

interface Props {
  placeholder: string;
  items: MenuProps["items"];
  onChange?: (value: string) => void;
}

export default function Dropdown({ placeholder, items, onChange }: Props) {
  const [value, setValue] = useState("");

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setValue(key);
    onChange?.(key);
  };

  return (
    <AntdDropdown
      menu={{ items, selectable: true, onClick }}
      trigger={["click"]}
    >
      <div
        id="custom__dropdown"
        className="flex h-10 w-full  items-center rounded-xl px-3 md:text-sm"
      >
        <div
          className={`flex-grow  ${!value ? "text-placeholder" : ""}
          `}
        >
          {value || placeholder}
        </div>
        <ArrowDown />
      </div>
    </AntdDropdown>
  );
}
