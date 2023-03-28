import React from "react";
import "./Container.css";
import Folder from "../Folder/Folder";

const Container = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="mobile-center-image">
          <img src="assets/img/headshot.jpeg" alt="Headshot" className="profile-pic"/>
        </div>
        <h1 className="dr-name">Dr. Abhishek Joshi</h1>
        <p className="dr-about">BMBCh, BA (Hons), MRCP (Lon.), PhD GMC Number: 7016162</p>
      </div>
      <div className="right-side">
        <Folder header={"Education"} content={"The Queen's College, University of Oxford Philosophy, BA (Hons) 2:(i) - 2003"}></Folder>
        <Folder header={"Medical Experience"} content={"boom"}></Folder>
        <Folder header={"Leadership & Strategic Roles"} content={"boom"}></Folder>
        <Folder header={"Teaching & Training"} content={"boom"}></Folder>
      </div>
    </div>
  );
};

export default Container;
