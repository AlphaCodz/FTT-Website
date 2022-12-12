import { RegisterSchoolType } from "../utils/Types";
import http from "./HttpService";

class SchoolService {
  static register = (payload: RegisterSchoolType) => {
    return http.post(`/school`, payload) as any;
  };
}

export default SchoolService;
