import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <div className="border-b-[3px] border-[#DDDDDB] bg-ash py-4">
      <div className=" mx-auto flex w-[95%] items-center justify-between">
        <img src={Logo} alt="Flip-to-Tech.png" className="block w-40" />
        <div className="flex items-center justify-between">
          <p className="mr-3 text-primary">Home</p>
          <button className="block rounded-xl bg-primary px-6 py-2 text-white">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
