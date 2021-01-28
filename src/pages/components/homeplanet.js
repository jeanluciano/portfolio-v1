import React from "react"
export default function HomePlanet (){
    return (
        <svg
        viewBox="0 0 2293 1467"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        className="mini"
      >
        <defs>
          <filter id="shadow" filterUnits="userSpaceOnUse" height="280%" width="280%">
            <feDropShadow dx="-20" dy="40" stdDeviation="30" />
          </filter>
        </defs>
        <circle
          cx="1143.14"
          cy="683.333"
          r="683.333"
          fill="#932432"
          filter={"url(#shadow)"}
        />
        <path
          d="M1694.59 226.747c328.278-19.69 549.394 43.092 578.081 158.974 44.647 180.344-423.845 451.715-1045.54 605.624-621.698 153.908-1162.68 132.446-1207.33-47.899-28.237-114.061 136.12-253.058 427.343-387.196"
          fill="none"
          stroke="#DE354C"
          strokeWidth="33.33"
        />
        <circle
          cx="2133.95"
          cy="622.917"
          r="141.667"
          fill="#3C1874"
          filter={"url(#shadow)"}
        />
        <circle
          cx="313.974"
          cy="610.417"
          r="54.167"
          fill="none"
          stroke="#3C1874"
          strokeWidth="33.33"
          filter={"url(#shadow)"}
        />
      </svg>
    )
}