import RoutesDeclaration from "./Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RoutesDeclaration />
    </div>
  );
}

export default App;
