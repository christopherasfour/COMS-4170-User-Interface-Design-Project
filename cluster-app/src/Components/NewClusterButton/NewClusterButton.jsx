import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import clusterplusicon from "../../../src/clusterplusicon.png";

export const NewClusterButton = () => {
return (
    <div className="green-plus">
    <div className="frame">
    <div className="overlap">
    <div className="text-wrapper">Cluster</div>
    <div className="group">
        <div className="overlap-group">
        <img className="rectangle" alt="Rectangle" src={clusterplusicon} />
        </div>
    </div>
    </div>
    </div>
    </div>
    );
};

NewClusterButton.propTypes = {
rectangle: PropTypes.string,
};