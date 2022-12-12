import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import RouteConstants from "./constants/RouteConstants";
import IndividualRegistrationPage from "./pages/individuals/Registration";
import SchoolRegistrationPage from "./pages/schools/Registration";
import PageNotFound from "./pages/PageNotFound";

export default function RoutesDeclaration() {
  return (
    <Router>
      <Routes>
        <Route
          path={RouteConstants.PAGE_NOT_FOUND}
          element={<PageNotFound />}
        />

        {/* Routes for Individuals */}
        <Route
          path={RouteConstants.REGISTER_INDIVIDUAL}
          element={<IndividualRegistrationPage />}
        />
        {/* Routes for Individuals ends*/}

        {/* <Route path={RouteConstants.REGISTER} element={<RegistrationPage />} /> */}

        {/* Routes for Schools */}
        <Route
          path={RouteConstants.REGISTER_SCHOOL}
          element={<SchoolRegistrationPage />}
        />
        {/* Routes for Schools ends*/}
      </Routes>
    </Router>
  );
}
