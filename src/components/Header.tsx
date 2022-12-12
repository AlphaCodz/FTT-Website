import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import Logo from "../assets/images/logo.png";

type MenuItemsProps = {
  className?: string;
  mobile?: Boolean;
};
const MenuItems = ({ className, mobile = false }: MenuItemsProps) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <p className="mr-3 text-primary">Home</p>
      <button className="block rounded-xl bg-primary px-6 py-2 text-white">
        Enroll
      </button>
    </div>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  return (
    <div className="border-b-[3px] border-[#DDDDDB] bg-ash py-4">
      <div className="mx-auto w-[95%]">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="Flip-to-Tech.png"
            className="block w-40 sm:w-32"
          />
          <MenuItems className={"md:hidden"} />
          <div
            className="hidden transition-all delay-200 md:block"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* {menuOpen ? (
              <GrClose className="text-2xl transition-all delay-200" />
            ) : (
              <GiHamburgerMenu className="text-3xl transition-all delay-200" />
            )}{" "} */}

            <GrClose
              className={` transition-all delay-200 ${
                menuOpen ? "opacity-1 text-2xl" : "text-[0px] opacity-0"
              }`}
            />
            <GiHamburgerMenu
              className={`transition-all delay-200 ${
                menuOpen ? "text-[0px] opacity-0" : "opacity-1 text-3xl"
              }`}
            />
          </div>
        </div>

        <div
          className={`h-0 overflow-hidden bg-ash transition-[height] delay-200 ease-linear ${
            menuOpen ? "h-24" : ""
          }`}
        >
          <MenuItems className="flex-col !items-start gap-2 pt-6" />
        </div>
      </div>
    </div>
  );
}
