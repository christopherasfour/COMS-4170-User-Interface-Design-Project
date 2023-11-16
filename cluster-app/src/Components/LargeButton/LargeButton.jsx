import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LargeButton = ({fill, className, divClassName, text = "Button text" }) => {
    return (
        <div className={`large-button ${fill} ${className}`}>
            <div className={`button-text ${divClassName}`}>{text}</div>
        </div>
    );
};

LargeButton.propTypes = {
    fill: PropTypes.oneOf(["none", "stroke-only", "purple", "blue"]),
    text: PropTypes.string
}