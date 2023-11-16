import React from "react";

export const AppIcon = ({ className }) => {
    return (
        <svg className={`app-icon ${className}`} width="118" height="94" viewBox="0 0 118 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_460_3075)">
        <circle cx="36" cy="45" r="36" fill="#91ADC2"/>
        <circle cx="79.5" cy="13.5" r="13.5" fill="#91ADC2"/>
        <circle cx="99" cy="33" r="9" fill="#91ADC2"/>
        <circle cx="82.5" cy="40.5" r="4.5" fill="#91ADC2"/>
        <circle cx="94.5" cy="70.5" r="22.5" fill="#91ADC2"/>
        </g>
        <defs>
        <filter id="filter0_d_460_3075" x="0" y="0" width="118" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1" dy="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.184314 0 0 0 0 0.243137 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_460_3075"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_460_3075" result="shape"/>
        </filter>
        </defs>
        </svg>        
    );
  };
  
