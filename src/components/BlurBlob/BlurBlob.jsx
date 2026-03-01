
// components/BlurBlob.jsx
import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  top = "50%",
  left = "50%",
  size = "400px",
  color1 = "#8245ec",
  color2 = "#a855f7",
  delay = "0s",
}) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        animationDelay: delay,
      }}
    >
      <div
        className="w-full h-full rounded-full blur-[120px] opacity-40 animate-blob-premium"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color1}, ${color2})`,
        }}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  size: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  delay: PropTypes.string,
};

export default BlurBlob;
