import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import { InputChangeEventHandler } from "../utils/Types";

export default function RegistrationPage() {
  return (
    <>
      <Header />
      <Container child={<Component />} />
      <Footer />
    </>
  );
}

type RegisterUserSchema = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  age_range: string;
  gender: string;
  country: string;
  Course_of_Study: string;
  educational_level: string;
  employment_status: string;
  How: string;
};

const Component = () => {
  const [state, setState] = useState<RegisterUserSchema>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    age_range: "",
    gender: "",
    country: "",
    Course_of_Study: "",
    educational_level: "",
    employment_status: "",
    How: ""
  });



  const handleInputChange =(e:InputChangeEventHandler)=>{
    console.log(e.target.name,e.target.value);
  
    setState(prev=> ({...prev, prev[e.target.name]: e.target.value}))
  }
  return (
    <div className="border border-dashed border-primary bg-[#FDFDF5] pt-24 pr-16 pl-10 pb-44">
      <h3 className="mb-10">
        Registration is now open for a 3-in-1 Live Bootcamp
      </h3>

      <p className="mb-20 text-center font-medium">
        ENTER YOUR DETAILS TO ENROLL FOR THE NEXT BOOTCAMP <br /> (JANUARY 2023)
      </p>

      <div className="mb-20 grid grid-cols-2 gap-10">
        <div className="">
          <label>
            First Name <span className="text-red-500">*</span>
          </label>
          <Input name="" placeholder="Enter your first name" />
        </div>
        <div className="">
          <label htmlFor="last_name">
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input onChange={(e)=> handleInputChange(e)} placeholder="Enter your last name" />
        </div>
        <div className="">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <Input placeholder="E.g name@gmail.com" />
        </div>{" "}
        <div className="">
          <label htmlFor="phone_number">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input placeholder="+234 123 4567 8910" />
        </div>
        <div className="">
          <label>
            Age Range <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select Age range"
            items={[
              {
                key: "18-25",
                value: "18-25"
              },
              {
                key: "26-33",
                value: "26-33"
              },
              {
                key: "34-40",
                value: "34-40"
              }
            ]}
          />
        </div>
        <div className="">
          <label>
            Gender <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select Gender"
            items={[
              {
                key: "M",
                value: "Male"
              },
              {
                key: "F",
                value: "Female"
              }
            ]}
          />
        </div>
        <div className="">
          <label>
            Country <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select your country"
            items={[
              {
                key: "NG",
                value: "Nigeria"
              }
            ]}
          />
        </div>
        <div className="">
          <label>
            Choose Course of Study <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select  course of study"
            items={[
              {
                key: "Mobile App Development",
                value: "Mobile App Development"
              },

              {
                key: "Data Analysis",
                value: "Data Analysis"
              },
              {
                key: "Python",
                value: "Python"
              }
            ]}
          />
        </div>
        <div className="">
          <label>
            Educational Level <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select your level of Education"
            items={[
              {
                key: "U-Grad",
                value: "Under Graduate"
              },

              {
                key: "Graduate",
                value: "Graduate"
              }
            ]}
          />
        </div>
        <div className="">
          <label>
            Employment Status <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select option"
            items={[
              {
                key: "Employed",
                value: "Employed"
              },

              {
                key: "Unemployed",
                value: "Unemployed"
              }
            ]}
          />
        </div>
        <div className="">
          <label>
            Employment Status <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select option"
            items={[
              {
                key: "Employed",
                value: "Employed"
              },

              {
                key: "Unemployed",
                value: "Unemployed"
              }
            ]}
          />
        </div>
      </div>

      <p className="mb-6">
        By submitting your info in the form above, you agree to our{" "}
        <Link to="#" className="text-primary">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link to="#" className="text-primary">
          Privacy Notice
        </Link>
        . We may use this info to contact you and/or use data from third parties
        to personalize your experience.
      </p>

      <button className="block rounded-xl bg-primary px-7 py-2 text-white">
        Enroll
      </button>
    </div>
  );
};
