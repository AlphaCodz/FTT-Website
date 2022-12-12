import { useState } from "react";
import ArrowDown from "../assets/svgs/ArrowDown";
import { Dropdown as AntdDropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { toastError } from "./Toast";

type Item = {
  key: string;
  label: string;
};
interface Props {
  placeholder: string;
  items: MenuProps["items"];
  rawItems: Item[];
  onChange?: (value: string) => void;
  placement?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight"
    | "top"
    | "bottom";
}

export default function Dropdown({
  placeholder,
  items,
  onChange,
  placement,
  rawItems
}: Props) {
  const [value, setValue] = useState("");
  const onClick: MenuProps["onClick"] = ({ key }) => {
    // { key, keyPath,domEvent }
    const selected = rawItems.find((item) => item.key === key);
    if (!selected) {
      toastError("No value selected");
      return;
    }
    setValue(selected?.label);
    onChange?.(key);
  };

  return (
    <AntdDropdown
      menu={{ items, selectable: true, onClick }}
      trigger={["click"]}
      placement={placement}
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

type StateDropdownProps = {
  onChange: (value: string) => void;
  placeholder: string;
};

export function StateDropdown({ onChange, placeholder }: StateDropdownProps) {
  return (
    <Dropdown
      placeholder={placeholder}
      onChange={(value) => onChange(value)}
      items={[
        {
          key: "AB",
          label: "Abia"
        },
        {
          key: "AD",
          label: "Adamawa"
        },
        {
          key: "AK",
          label: "Akwa Ibom"
        },
        {
          key: "AN",
          label: "Anambra"
        },
        {
          key: "BAU",
          label: "Bauchi"
        },
        {
          key: "BAY",
          label: "Bayelsa"
        },

        {
          key: "BEN",
          label: "Benue"
        },
        {
          key: "BOR",
          label: "Borno"
        },
        {
          key: "CRO",
          label: "Cross River"
        },
        {
          key: "DEL",
          label: "Delta"
        },
        {
          key: "EBO",
          label: "Ebonyi"
        },
        {
          key: "EDO",
          label: "Edo"
        },
        {
          key: "EK",
          label: "Ekiti"
        },
        {
          key: "ENU",
          label: "Enugu"
        },
        {
          key: "GOM",
          label: "Gombe"
        },
        {
          key: "IMO",
          label: "Imo"
        },
        {
          key: "JIG",
          label: "Jigawa"
        },
        {
          key: "KAD",
          label: "Kaduna"
        },
        {
          key: "KA",
          label: "Kano"
        },
        {
          key: "KAT",
          label: "Katsina"
        },
        {
          key: "KE",
          label: "Kebbi"
        },
        {
          key: "KO",
          label: "Kogi"
        },
        {
          key: "KW",
          label: "Kwara"
        },
        {
          key: "LA",
          label: "Lagos"
        },
        {
          key: "NA",
          label: "Nasarawa"
        },
        {
          key: "NI",
          label: "Niger"
        },
        {
          key: "OG",
          label: "Ogun"
        },
        {
          key: "ON",
          label: "Ondo"
        },
        {
          key: "OS",
          label: "Osun"
        },
        {
          key: "OY",
          label: "Oyo"
        },
        {
          key: "PL",
          label: "Plateau"
        },
        {
          key: "RI",
          label: "Rivers"
        },
        {
          key: "SO",
          label: "Sokoto"
        },
        {
          key: "TA",
          label: "Taraba"
        },
        {
          key: "YO",
          label: "Yobe"
        },
        {
          key: "ZA",
          label: "Zamfara"
        },
        {
          key: "ABJ",
          label: "Abuja"
        }
      ]}
      rawItems={[
        {
          key: "AB",
          label: "Abia"
        },
        {
          key: "AD",
          label: "Adamawa"
        },
        {
          key: "AK",
          label: "Akwa Ibom"
        },
        {
          key: "AN",
          label: "Anambra"
        },
        {
          key: "BAU",
          label: "Bauchi"
        },
        {
          key: "BAY",
          label: "Bayelsa"
        },

        {
          key: "BEN",
          label: "Benue"
        },
        {
          key: "BOR",
          label: "Borno"
        },
        {
          key: "CRO",
          label: "Cross River"
        },
        {
          key: "DEL",
          label: "Delta"
        },
        {
          key: "EBO",
          label: "Ebonyi"
        },
        {
          key: "EDO",
          label: "Edo"
        },
        {
          key: "EK",
          label: "Ekiti"
        },
        {
          key: "ENU",
          label: "Enugu"
        },
        {
          key: "GOM",
          label: "Gombe"
        },
        {
          key: "IMO",
          label: "Imo"
        },
        {
          key: "JIG",
          label: "Jigawa"
        },
        {
          key: "KAD",
          label: "Kaduna"
        },
        {
          key: "KA",
          label: "Kano"
        },
        {
          key: "KAT",
          label: "Katsina"
        },
        {
          key: "KE",
          label: "Kebbi"
        },
        {
          key: "KO",
          label: "Kogi"
        },
        {
          key: "KW",
          label: "Kwara"
        },
        {
          key: "LA",
          label: "Lagos"
        },
        {
          key: "NA",
          label: "Nasarawa"
        },
        {
          key: "NI",
          label: "Niger"
        },
        {
          key: "OG",
          label: "Ogun"
        },
        {
          key: "ON",
          label: "Ondo"
        },
        {
          key: "OS",
          label: "Osun"
        },
        {
          key: "OY",
          label: "Oyo"
        },
        {
          key: "PL",
          label: "Plateau"
        },
        {
          key: "RI",
          label: "Rivers"
        },
        {
          key: "SO",
          label: "Sokoto"
        },
        {
          key: "TA",
          label: "Taraba"
        },
        {
          key: "YO",
          label: "Yobe"
        },
        {
          key: "ZA",
          label: "Zamfara"
        },
        {
          key: "ABJ",
          label: "Abuja"
        }
      ]}
      placement="bottomRight"
    />
  );
}
