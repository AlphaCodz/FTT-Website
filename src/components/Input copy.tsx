import { InputChangeEventHandler } from "../utils/Types";

interface Props {
  placeholder: string;
  name: string;
  onChange?: (value: InputChangeEventHandler) => void;
}

export default function Input({ placeholder, onChange, name }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange?.(e)}
      name={name}
      className="h-10 w-full rounded-xl px-3 placeholder:text-[#2D281C] placeholder:text-opacity-60"
    />
  );
}
