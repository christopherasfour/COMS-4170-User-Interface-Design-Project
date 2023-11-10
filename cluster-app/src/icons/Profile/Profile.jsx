import React from "react";
import "./style.css";

export const Profile = ({ className }) => {
  return (
      <img
        className={`profile ${className}`}
        alt="Person crop circle"
        src="https://c.animaapp.com/lGr2EW3X/img/person-crop-circle-badge.svg"
      />
  );
};
