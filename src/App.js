import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Compnents/Home";
import Sidebar from "./Compnents/Sidebar";
import ViewDetails from "./Compnents/ViewDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import MyProfile from "./Compnents/MyProfile.jsx";
import MyQuote from "./Compnents/MyQuote.jsx";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Sidebar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/viewDetails" element={<ViewDetails />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myquote" element={<MyQuote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
