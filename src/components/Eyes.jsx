import React from "react";

const Eyes = () => {
  const animationSeconds = 7
  const eyeStyle = {
    width: "250px",
    height: "250px",
    backgroundSize: "contain",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    animation: `blink ${animationSeconds}s infinite`,
    animationTimingFunction: "steps(1, end)"
  }
  return (
    <div className="eyes" style={{
      display: "flex",
      justifyContent: "space-around"
    }}>
      <div className="eye" style={eyeStyle}></div>
      <div className="eye" style={eyeStyle}></div>
    </div>
  );
};

export default Eyes;
