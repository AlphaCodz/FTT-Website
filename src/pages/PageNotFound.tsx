import { Link } from "react-router-dom";
import RouteConstants from "../constants/RouteConstants";

export default function PageNotFound() {
  return (
    <>
      <h3 className="md:text-lg">
        Sorry! Can't find the page you're looking for
      </h3>

      <Link to={RouteConstants.HOME} className="block">
        Back to home
      </Link>
      <Link to={RouteConstants.REGISTER_SCHOOL} className="block">
        Register School
      </Link>
      <Link to={RouteConstants.REGISTER_INDIVIDUAL} className="block">
        Register Individual
      </Link>
    </>
  );
}
