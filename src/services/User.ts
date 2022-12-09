import { RegisterUserType } from "../utils/Types";
import http from "./HttpService";

class UserService {
  static register = (payload: RegisterUserType) => {
    return http.post(`/user`, payload) as any;
  };
}

export default UserService;
