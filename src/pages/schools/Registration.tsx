import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Dropdown, { StateDropdown } from "../../components/Dropdown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Spinner from "../../components/Spinner";
import UserService from "../../services/User";
import { RegisterSchoolType } from "../../utils/Types";
import { errorMessages } from "../../utils/ErrorHandlers";
import { toastError, toastSuccess } from "../../components/Toast";
import SchoolService from "../../services/School";

export default function RegistrationPage() {
  return (
    <>
      <Header isSchool={true} />
      <Container child={<Component />} />
      <Footer />
    </>
  );
}

const Component = () => {
  const [state, setState] = useState<RegisterSchoolType>({
    name: "",
    name_of_school: "",
    address: "",
    year_of_establishment: "",
    office_contact: "",
    phone_number: "",
    work_email: "",
    no_of_students: "",
    local_government_area: "",
    state: "",
    school_type: "",
    who: "",
    government_approved: "",
    level: ""
  });

  // TODO: CONVERT TO RTK QUERY
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="pt-24 pr-16 pl-10 pb-44 sm:pr-8 sm:pl-5 md:pt-12 md:pb-20">
      <h3 className="mb-12 text-center md:mb-6 md:text-2xl">
        Ready to transform your School?
      </h3>

      <div className="mb-12 grid grid-cols-2 gap-10 text-sm md:mb-10 md:grid-cols-1 md:gap-6">
        <div className="">
          <label className="font-bold">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Full Name"
            onChange={(value) => setState((p) => ({ ...p, name: value }))}
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            School name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="E.g. Destiny Int’l School"
            onChange={(value) =>
              setState((p) => ({ ...p, name_of_school: value }))
            }
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            School address <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="E.g. Block  No. Street name, nearest bustop"
            onChange={(value) => setState((p) => ({ ...p, address: value }))}
          />
        </div>{" "}
        <div className="">
          <label className="text-sm font-bold">
            School year of establishment <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="E.g. 2003"
            onChange={(value) =>
              setState((p) => ({ ...p, year_of_establishment: value }))
            }
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            Office contact number <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="E.g. +234 901 123 4567"
            onChange={(value) =>
              setState((p) => ({ ...p, office_contact: value }))
            }
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            Phone number <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="E.g. +234 901 123 4567"
            onChange={(value) =>
              setState((p) => ({ ...p, phone_number: value }))
            }
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            Work Email address <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="E.g.name@gmail.com"
            onChange={(value) => setState((p) => ({ ...p, work_email: value }))}
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            Total number of Students <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="Please enter total number student in figure"
            onChange={(value) =>
              setState((p) => ({ ...p, no_of_students: value }))
            }
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            State <span className="text-red-500">*</span>
          </label>
          <StateDropdown
            placeholder="State where your School is located"
            onChange={(value) => setState((p) => ({ ...p, state: value }))}
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            LGA <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="Local government area where school is located"
            onChange={(value) =>
              setState((p) => ({ ...p, local_government_area: value }))
            }
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            School Type <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select type of school"
            onChange={(value) =>
              setState((p) => ({ ...p, school_type: value }))
            }
            items={[
              {
                key: "PRIVATE",
                label: "Private School"
              },

              {
                key: "GOVERNMENT",
                label: "Public School"
              }
            ]}
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            Job Title <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="E.g. Head Teacher"
            onChange={(value) => setState((p) => ({ ...p, who: value }))}
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            Government approved <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select option"
            onChange={(value) =>
              setState((p) => ({ ...p, government_approved: value }))
            }
            items={[
              {
                key: "True",
                label: "Yes"
              },

              {
                key: "False",
                label: "No"
              }
            ]}
          />
        </div>
        <div className="">
          <label className="text-sm font-bold">
            Level of Institution do you run{" "}
            <span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="Select level of institution"
            onChange={(value) => setState((p) => ({ ...p, level: value }))}
            items={[
              {
                key: "PRIMARY",
                label: "Primary Only"
              },

              {
                key: "SECONDARY",
                label: "Secondary Only"
              },
              {
                key: "BOTH",
                label: "Both Primary & Secondary"
              }
            ]}
          />
        </div>
      </div>

      <p className="mb-6 text-sm font-bold md:text-xs">
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
        className="block rounded-xl bg-primary px-7 py-2 text-white disabled:cursor-not-allowed disabled:bg-primaryDisabled md:mx-auto"
        disabled={loading}
        onClick={async () => {
          // console.log({ state });
          // return;
          const form = new FormData();
          try {
            setLoading(true);

            for (const [field, value] of Object.entries(state)) {
              if (!value) {
                toastError("All fields are required");
                setLoading(false);
                return;
              }

              form.append(field, value);
            }

            await SchoolService.register(state);
            toastSuccess(
              "Registration successful🎉🎉🎉! We'll contact you via email"
            );
            setLoading(false);
          } catch (error: any) {
            const errors = errorMessages(error);
            errors.forEach((e) => toastError(e));
            setLoading(false);
          }
        }}
      >
        {loading ? <Spinner /> : "REGISTER"}
      </button>
    </div>
  );
};
