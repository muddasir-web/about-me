import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Search Engine Optimization",
          "Search Engine Marketing",
          "Youtube, Tiktok, & Meta Ads",
          "Attrative Web Design",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
