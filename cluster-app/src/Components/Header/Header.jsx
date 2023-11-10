import React from "react";
import { Edit } from '../../icons/Edit/Edit';
import { Profile } from '../../icons/Profile/Profile';
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="text-wrapper">House</div>
      <Edit className="edit-instance" />
      <Profile className="profile-instance" />
    </div>
  );
};