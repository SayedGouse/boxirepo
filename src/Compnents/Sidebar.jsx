import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoReceipt } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { RiLogoutCircleFill } from "react-icons/ri";

const Sidebar = () => {
  const location = useLocation();
  const [focus, setFocus] = useState(location.pathname);

  const handleFocus = (path) => {
    setFocus(path);
  };

  const getIndicatorStyle = (path) => ({
    width: focus === path ? "5px" : null,
    height: focus === path ? "40px" : null,
    marginRight: focus === path ? "10px" : null,
  });

  return (
    <aside id="sidebar">
      <ul className="sidebar-list">
        <Link
          style={{ textDecoration: "none", color: "whitesmoke" }}
          to="/home"
        >
          <li
            style={{ paddingLeft: "15%" }}
            className="sidebar-list-item"
            onClick={() => handleFocus("/home")}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="bg-danger text-white move"
                style={getIndicatorStyle("/home")}
              ></div>
              <FaTruckFast size={28} className="icon" /> MY MOVES
            </div>
          </li>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "whitesmoke" }}
          to="/myprofile"
        >
          <li
            style={{ paddingLeft: "15%" }}
            className="sidebar-list-item"
            onClick={() => handleFocus("/myprofile")}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="bg-danger text-white move"
                style={getIndicatorStyle("/myprofile")}
              ></div>
              <FaUser size={28} className="icon" /> MY PROFILE
            </div>
          </li>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "whitesmoke" }}
          to="/myquote"
        >
          <li
            style={{ paddingLeft: "15%" }}
            className="sidebar-list-item"
            onClick={() => handleFocus("/myquote")}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="bg-danger text-white move"
                style={getIndicatorStyle("/myquote")}
              ></div>
              <IoReceipt size={28} className="icon" />
              GET QUOTE
            </div>
          </li>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "whitesmoke" }}
          to="/logout"
        >
          <li
            style={{ paddingLeft: "15%" }}
            className="sidebar-list-item"
            onClick={() => handleFocus("/logout")}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="bg-danger text-white move"
                style={getIndicatorStyle("/logout")}
              ></div>
              <RiLogoutCircleFill size={28} className="icon" /> LOGOUT
            </div>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
