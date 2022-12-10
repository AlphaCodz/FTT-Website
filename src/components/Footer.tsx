import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_white.png";
import QRCode from "../assets/images/qr_code.png";
import Input from "./Input";

export default function Footer() {
  return (
    <div className="bg-[#2D281C] text-white">
      <div className="mx-auto w-11/12 pt-16 pb-4 ">
        <div className="mx-auto mb-8 w-3/5">
          <h5 className="mb-2 text-center text-xl font-medium text-yellow-400">
            Suscribe to Newsletter
          </h5>

          <div className="flex">
            <Input
              placeholder="Input your E-mail address"
              className="rounded-r-none bg-ash"
            />
            <button className="rounded-r-lg bg-primary px-6 py-2">
              Suscribe
            </button>
          </div>
        </div>

        <div className=" mb-6  flex items-center gap-16">
          <div className="">
            <img
              src={Logo}
              alt="Flip-To-Tech.png"
              className="mb-5 inline-block w-36"
            />
            <img
              src={QRCode}
              alt="Flip-To-Tech.png"
              className="mb-3 block w-36"
            />
            <small className="block text-center ">Scan to register</small>
          </div>
          <div className="flex flex-grow justify-between">
            <div className="flex-grow">
              <h5 className="mb-6 text-lg font-medium text-primary">
                FlipToTech
              </h5>
              <Link to="#" className="mb-2 block">
                About
              </Link>
              <Link to="#" className="mb-2 block">
                Catalog
              </Link>
              <Link to="#" className="mb-2 block">
                Careers
              </Link>
              <Link to="#" className="mb-2 block">
                What We Offer
              </Link>
              <Link to="#" className="mb-2 block">
                Leadership
              </Link>
              <Link to="#" className="mb-2 block">
                Become a Partner
              </Link>
              <Link to="#" className="mb-2 block">
                News Letter
              </Link>
            </div>

            <div className="flex-grow">
              <h5 className="mb-6 text-lg font-medium text-primary">
                Community
              </h5>
              <Link to="#" className="mb-2 block">
                Developers
              </Link>
              <Link to="#" className="mb-2 block">
                Catalog
              </Link>
              <Link to="#" className="mb-2 block">
                Learners
              </Link>
              <Link to="#" className="mb-2 block">
                Alluminia
              </Link>
              <Link to="#" className="mb-2 block">
                Partners
              </Link>
            </div>

            <div className="flex-grow">
              <h5 className="mb-6 text-lg font-medium text-primary">More</h5>
              <Link to="#" className="mb-2 block">
                Terms of Use
              </Link>
              <Link to="#" className="mb-2 block">
                Privacy Policy
              </Link>
              <Link to="#" className="mb-2 block">
                Help
              </Link>
              <Link to="#" className="mb-2 block">
                Contact
              </Link>
              <Link to="#" className="mb-2 block">
                Leadership
              </Link>
              <Link to="#" className="mb-2 block">
                Become a Partner
              </Link>
            </div>

            <div className="flex-grow">
              <h5 className="mb-6 text-lg font-medium text-primary">Connect</h5>
              <Link to="#" className="mb-2 block">
                Blog
              </Link>
              <Link to="#" className="mb-2 block">
                Facebook
              </Link>
              <Link to="#" className="mb-2 block">
                Linkedin
              </Link>
              <Link to="#" className="mb-2 block">
                Instagram{" "}
              </Link>
              <Link to="#" className="mb-2 block">
                Twitter
              </Link>
              <Link to="#" className="mb-2 block">
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
        <small className="block text-center text-sm">
          © 2022 FlipToTech. All Right Reserved
        </small>
      </div>
    </div>
  );
}
