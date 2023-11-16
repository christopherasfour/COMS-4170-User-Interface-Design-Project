import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Ai = ({
  className,
  intersect = "https://c.animaapp.com/NBTlq52l/img/intersect.svg",
  img = "https://c.animaapp.com/NBTlq52l/img/intersect-7.svg",
  intersect1 = "https://c.animaapp.com/NBTlq52l/img/intersect-11.svg",
  intersect2 = "https://c.animaapp.com/NBTlq52l/img/intersect-10.svg",
  intersect3 = "https://c.animaapp.com/NBTlq52l/img/intersect-9.svg",
  intersect4 = "https://c.animaapp.com/NBTlq52l/img/intersect-8.svg",
}) => {
  return (
    <div className={`AI ${className}`}>
      <div className="aperture">
        <div className="overlap">
          <div className="overlap-group">
            <div className="aperture-wing">
              <img className="intersect" alt="Intersect" src={intersect} />
            </div>
            <div className="intersect-wrapper">
              <img className="img" alt="Intersect" src={img} />
            </div>
          </div>
          <div className="img-wrapper">
            <img className="intersect-2" alt="Intersect" src={intersect1} />
          </div>
          <div className="div">
            <div className="aperture-wing-2">
              <img className="intersect-3" alt="Intersect" src={intersect2} />
            </div>
            <div className="aperture-wing-3">
              <img className="intersect-4" alt="Intersect" src={intersect3} />
            </div>
          </div>
          <div className="aperture-wing-4">
            <img className="intersect-5" alt="Intersect" src={intersect4} />
          </div>
        </div>
      </div>
    </div>
  );
};

Ai.propTypes = {
  intersect: PropTypes.string,
  img: PropTypes.string,
  intersect1: PropTypes.string,
  intersect2: PropTypes.string,
  intersect3: PropTypes.string,
  intersect4: PropTypes.string,
};
