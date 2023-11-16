import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import itemplusicon from "../../../src/itemplusicon.png";

export const NewItemButton = () => {
return (
    <div className="blue-plus">
    <div className="frame">
    <div className="overlap">
    <div className="text-wrapper">Item</div>
    <div className="group">
        <div className="overlap-group">
        <img className="rectangle" alt="Rectangle" src={itemplusicon} />
        </div>
    </div>
    </div>
    </div>
    </div>
    );
};

NewItemButton.propTypes = {
rectangle: PropTypes.string,
};