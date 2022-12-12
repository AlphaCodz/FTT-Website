import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import RouteConstants from "../constants/RouteConstants";

type Props = {
  isSchool?: boolean;
};

type MenuItemsProps = {
  className?: string;
  mobile?: Boolean;
  isSchool: boolean;
};
const MenuItems = ({ className, isSchool }: MenuItemsProps) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {isSchool ? (
        <>
          <button className="block rounded-xl bg-primary px-6 py-2 text-white">
            Contact Us
          </button>
        </>
      ) : (
        <>
          <p className="mr-3 text-primary">Home</p>
          <button className="block rounded-xl bg-primary px-6 py-2 text-white">
            Enroll
          </button>
        </>
      )}
    </div>
  );
};

export default function Header({ isSchool = false }: Props) {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  return (
    <div className="border-b-[3px] border-[#DDDDDB] bg-ash py-4">
      <div className="mx-auto w-[95%]">
        <div className="flex items-center justify-between">
          <Link
            to={RouteConstants.HOME}
            className={` ${
              isSchool ? "flex items-baseline gap-3 hover:text-black" : ""
            }`}
          >
            <img
              src={Logo}
              alt="Flip-to-Tech.png"
              className="block w-40 sm:w-32"
            />
            <h4
              className={`text-3xl font-bold sm:text-xl md:text-2xl ${
                isSchool ? "block" : "hidden"
              }`}
            >
              FOR SCHOOL
            </h4>
          </Link>

          <MenuItems className={"md:hidden"} isSchool={isSchool} />
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
          <MenuItems
            className="flex-col !items-start gap-2 pt-6"
            isSchool={isSchool}
          />
        </div>
      </div>
    </div>
  );
}
