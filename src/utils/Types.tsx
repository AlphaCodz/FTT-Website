export type InputChangeEventHandler = React.ChangeEvent<HTMLInputElement>;

export type RegisterUserType = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  age_range: string;
  gender: string;
  state: string;
  course: string;
  educational_level: string;
  employment_status: string;
  How: string;
};

export type RegisterSchoolType = {
  name: string;
  name_of_school: string;
  address: string;
  year_of_establishment: string;
  office_contact: string;
  phone_number: string;
  work_email: string;
  no_of_students: string;
  local_government_area: string;
  state: string;
  school_type: string;
  who: string;
  government_approved: string;
  level: string;
};
