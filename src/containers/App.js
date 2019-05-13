import React from "react";

import useData from "../hooks/useData";

import ChartContainer from "./ChartContainer";

const App = props => {
  const data = useData();

  return (
    <>
      <ChartContainer data={data} />
      <p>Click on Year to Play/Stop animation.</p>
      <p>
        This is a clone of a famous visualization from{" "}
        <a
          href="https://www.gapminder.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gapminder
        </a>
        , showing how life expectancy has been increasing over the years with
        GDP per capita.{" "}
      </p>
      <p>
        Mouse over each circle to watch country info. **
        <strong>Only works when viz is stopped</strong>**.
      </p>
    </>
  );
};

export default App;
