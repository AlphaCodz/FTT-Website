import RoutesDeclaration from "./Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer limit={3} hideProgressBar={true} />
      <RoutesDeclaration />
    </div>
  );
}

export default App;
