import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import Routing from "./routes/Routing";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
);