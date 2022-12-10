import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import UserService from "../services/User";
import { RegisterUserType } from "../utils/Types";
import { errorMessages } from "../utils/ErrorHandlers";

export default function RegistrationPage() {
  return (
    <>
      <Header />
      <Container child={<Component />} />
      <Footer />
    </>
  );
}

const Component = () => {
  const [state, setState] = useState<RegisterUserType>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    age_range: "",
    gender: "",
    state: "",
    course: "",
    educational_level: "",
    employment_status: "",
    How: ""
  });

  // TODO: CONVERT TO RTK QUERY
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="border border-t-0 border-b-0 border-dashed border-primary bg-[#FDFDF5] pt-24 pr-16 pl-10 pb-44">
      <h3 className="mb-10">
        Registration is now open for a 3-in-1 Live Bootcamp
      </h3>

      <p className="mb-20 text-center font-medium">
        ENTER YOUR DETAILS TO ENROLL FOR THE NEXT BOOTCAMP <br /> (JANUARY 2023)
      </p>

      <div className="mb-12 grid grid-cols-2 gap-10">
        <div className="">
          <label>
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Enter your first name"
            onChange={(value) => setState((p) => ({ ...p, first_name: value }))}
          />
        </div>
        <div className="">
          <label>
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Enter your last name"
            onChange={(value) => setState((p) => ({ ...p, last_name: value }))}
          />
        </div>
        <div className="">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="E.g name@gmail.com"
            onChange={(value) => setState((p) => ({ ...p, email: value }))}
          />
        </div>{" "}
        <div className="">
          <label htmlFor="phone_number">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="+234 123 4567 8910"
            onChange={(value) =>
              setState((p) => ({ ...p, phone_number: value }))
            }
          />
        </div>
        <div className="">
          <label>
            Age Range <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select Age range"
            onChange={(value) => setState((p) => ({ ...p, age_range: value }))}
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
            onChange={(value) => setState((p) => ({ ...p, gender: value }))}
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
            State <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select your state"
            onChange={(value) => setState((p) => ({ ...p, state: value }))}
            items={[
              {
                key: "LA",
                value: "Lagos"
              },
              {
                key: "KAD",
                value: "Kaduna"
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
            onChange={(value) => setState((p) => ({ ...p, course: value }))}
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
            onChange={(value) =>
              setState((p) => ({ ...p, educational_level: value }))
            }
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
            onChange={(value) =>
              setState((p) => ({ ...p, employment_status: value }))
            }
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
            How did you hear about Us <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select option"
            onChange={(value) => setState((p) => ({ ...p, How: value }))}
            items={[
              {
                key: "Social Media",
                value: "Social Media"
              },
              {
                key: "Advertisements",
                value: "Advertisements"
              },
              {
                key: "Referral",
                value: "Referral"
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

      <button
        className="block rounded-xl bg-primary px-7 py-2 text-white disabled:cursor-not-allowed disabled:bg-primaryDisabled"
        disabled={loading}
        onClick={async () => {
          const form = new FormData();
          try {
            setLoading(true);

            for (const [field, value] of Object.entries(state)) {
              if (!value) {
                toast.error("All fields are required");
                setLoading(false);
                return;
              }

              form.append(field, value);
            }

            await UserService.register(state);
            toast.success(
              "Registration successful🎉🎉🎉! We'll contact you via email"
            );
          } catch (error: any) {
            const errors = errorMessages(error);
            errors.forEach((e) => toast.error(e));
            setLoading(false);
          }
        }}
      >
        {loading ? <Spinner /> : "Enroll"}
      </button>
    </div>
  );
};
