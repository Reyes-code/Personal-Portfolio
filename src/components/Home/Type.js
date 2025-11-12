import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Development",
          "React.js & Django",
          "Data Science",
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
