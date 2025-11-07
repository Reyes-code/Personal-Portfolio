import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React.js Developer",
          "Data Analysis",
          "Machine Learning",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 
        60,
      }}
    />
  );
}

export default Type;
