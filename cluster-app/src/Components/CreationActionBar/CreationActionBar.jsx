import React from "react";
// import { NewClusterButton } from "../../components/GreenPlus";
import { BackArrow } from "../../icons/BackArrow/BackArrow";
// import { NewItemButton } from "../../icons/CarretRight";
import "./style.css";
import { NewClusterButton } from "../NewClusterButton/NewClusterButton";
import { NewItemButton } from "../NewItemButton/NewItemButton";

export const CreationActionBar = () => {
  return (
    <div className="creation-action-bar">
      <BackArrow className="back-arrow" />
      <NewClusterButton/>
      <NewItemButton/>
    </div>
  );
};
