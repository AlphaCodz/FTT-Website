import { InputChangeEventHandler } from "../utils/Types";

interface Props {
  placeholder: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Input({
  placeholder,
  onChange,
  className = ""
}: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      className={
        "h-10 w-full rounded-xl px-3 placeholder:text-[#2D281C] placeholder:text-opacity-60 " +
        className
      }
    />
  );
}
