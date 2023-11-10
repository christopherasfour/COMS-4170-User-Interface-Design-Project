import React from "react";

export const BackArrow = ({ className }) => {
  return (
    <svg
      className={`back-arrow ${className}`}
      fill="none"
      height="46"
      viewBox="0 0 46 46"
      width="46"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.4063 12.7961L8.625 23.2226M8.625 23.2226L19.4062 33.649M8.625 23.2226L37.375 23.2226"
        stroke="#999999"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
};
