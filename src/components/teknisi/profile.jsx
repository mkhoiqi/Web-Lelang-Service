import React from "react";
import Navbar from "./navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="container profile-page">
        <div className="prof-icon">
          <FaRegUserCircle size="15em" className="icon" />
        </div>
        <div className="bio">
          <div className="name">
            <h1>Bruno Mars</h1>
            <a href="/profile/edit">
              <FiEdit className="icon" />
            </a>
          </div>
          <div className="other">
            <p>118140901</p>
            <p>bruno.118140901@student.itera.ac.id</p>
            <p>085820007000</p>
          </div>
        </div>
        <div className="btn-wrap">
          <a href="/login" className="logout-btn">
            <button type="button" className="btn btn-primary">
              Logout
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;