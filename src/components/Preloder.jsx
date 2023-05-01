import { Text } from "@chakra-ui/react";
import React from "react";

const Preloder = () => {
  return (
    <>
      <div id="loading">
        <svg
          style={{
            fontWeight: "700",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          className=".svg"
          viewBox="0 0 1320 300"
        >
          <text
            style={{
              textTransform: "uppercase",
              animation: " stroke 5s infinite alternate",
              strokeWidth: "2",
              stroke: "#365fa0",
              fontSize: "140px",
            }}
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
          >
            TECHICIOUS.
          </text>
        </svg>
      </div>
    </>
  );
};

export default Preloder;
