import React from "react";
// import { NewClusterButton } from "../../components/GreenPlus";
import { BackArrow } from "../../icons/BackArrow/BackArrow";
// import { NewItemButton } from "../../icons/CarretRight";
import "./style.css";

export const CreationActionBar = () => {
  return (
    <div className="creation-action-bar">
      <BackArrow className="back-arrow" />
    </div>
  );
};
