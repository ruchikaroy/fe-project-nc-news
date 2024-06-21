import { Navigate } from "react-router-dom";

function MissingRoute() {
  return <Navigate to={{ pathname: "/" }} />;
}
export default MissingRoute;
