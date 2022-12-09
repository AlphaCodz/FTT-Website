import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_white.png";
import QRCode from "../assets/images/qr_code.png";

export default function Footer() {
  return (
    <div className="bg-[#2D281C]">
      <div className="mx-auto flex w-11/12 items-center gap-16 py-20">
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
          <small className="block text-center text-white ">
            Scan to register
          </small>
        </div>

        <div className="flex flex-grow justify-between text-white">
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
            <h5 className="mb-6 text-lg font-medium text-primary">Community</h5>
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
    </div>
  );
}
