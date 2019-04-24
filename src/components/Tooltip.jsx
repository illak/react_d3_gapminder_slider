import React from "react";
import styled from "styled-components";
import * as d3 from "d3";

const StyledTooltip = styled.div`
  min-width: 120px;
  max-width: 210px;
  position: absolute;
  z-index: 10;

  bottom: 100%;
  left: 50%;
  padding-bottom: 9px;
  transform: translateX(-50%);
`;

const StyledTooltipMsg = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  color: #fff;
  font-size: 0.95rem;
  line-height: 1.4;
  padding: 0.75em;
  text-align: left;
`;

const Tooltip = ({ x, y, tooltipData }) => {
  return (
    <StyledTooltip style={{ top: y, left: x }}>
      <StyledTooltipMsg>
        <strong>Country: </strong>{" "}
        <span style={{ color: "red" }}>{tooltipData.country}</span>
        <br />
        <strong>Continent: </strong>{" "}
        <span style={{ color: "red" }}>{tooltipData.continent}</span>
        <br />
        <strong>Population: </strong>
        <span style={{ color: "red" }}>{tooltipData.population} </span>
        <br />
        <strong>Income: </strong>{" "}
        <span style={{ color: "red" }}>
          {d3.format("$,.0f")(tooltipData.income)}
        </span>
        <br />
        <strong>Life Expentancy: </strong>{" "}
        <span style={{ color: "red" }}>
          {d3.format(".2f")(tooltipData.life_exp)}
        </span>
      </StyledTooltipMsg>
    </StyledTooltip>
  );
};

export default Tooltip;
