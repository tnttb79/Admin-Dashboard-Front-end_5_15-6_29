import React from "react";
import { useTheme } from "@mui/material";

const ProgressCircle = ({ pct, size }) => {
  const circleArea = 2 * Math.PI * (size / 2 - 10);
  const radius = size / 2 - 10;
  const theme = useTheme();
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke="#E6E6E6"
        strokeWidth={size / 10}
        strokeDasharray={circleArea}
        strokeDashoffset="0"
        strokeLinecap="round"
      ></circle>
      <circle
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke="#297373"
        strokeWidth={size / 10}
        strokeDasharray={circleArea}
        strokeDashoffset={circleArea - (pct / 100) * circleArea}
        strokeLinecap="round"
      ></circle>
      <text
        x={size / 2}
        y={1.15 * (size / 2)}
        text-anchor="middle"
        font-size={size / 5}
        style={{ fontWeight: "bold",}}
        transform={`rotate(90 ${size / 2} ${size / 2})`}
        fill={theme.palette.text.primary}
      >{`${pct}%`}</text>
    </svg>
  );
};

export default ProgressCircle;
