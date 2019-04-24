import React from "react";

const Legend = ({ items, color }) => {
  return items.map((item, i) => (
    <g transform={`translate(0, ${i * 20})`} key={item}>
      <rect width={10} height={10} fill={color(item)} />
      <text
        x={-10}
        y={10}
        textAnchor="end"
        style={{ textTransform: "capitalize" }}
      >
        {item}
      </text>
    </g>
  ));
};

export default Legend;
