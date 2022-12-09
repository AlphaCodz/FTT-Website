import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import RouteConstants from "./constants/RouteConstants";
import RegistrationPage from "./pages/Registration";

export default function RoutesDeclaration() {
  return (
    <Router>
      <Routes>
        <Route path={RouteConstants.HOME} element={<RegistrationPage />} />

        {/* <Route path={RouteConstants.REGISTER} element={<RegistrationPage />} /> */}
      </Routes>
    </Router>
  );
}
