import React from "react";
import { Link } from "react-router-dom";
import { FaAddressBook, FaBook } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-item">
        <p>NEW CONTACT</p>
        <Link to="/newcontact" className="link">
          <FaAddressBook size="30px" />
        </Link>
      </div>
      <div className="nav-item">
        <p>AREA REPORT</p>
        <Link to="/areacontacts" className="link">
          <FaBook size="30px" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
