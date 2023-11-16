import React from "react";
import "./style.css";

export const Cluster = ({text}) => {
return (
    <div className="box">
        <div className="inner">
            <h2>{text}</h2>
        </div>
    </div>
);
};