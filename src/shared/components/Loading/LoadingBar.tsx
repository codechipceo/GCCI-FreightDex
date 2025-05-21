import React from "react";

const LoadingBar: React.FC = () => {
  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "sans-serif",
    color: "#555",
    fontSize: "14px",
    marginTop: "10px",
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "4px",
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    position: "relative",
    marginTop: "4px",
  };

  const barStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: "#007bff",
    animation: "loadingBarAnim 1.5s infinite linear",
    transform: "translateX(-100%)",
  };

  return (
    <div style={wrapperStyle}>
      <span>Loading...</span>
      <div style={containerStyle}>
        <div style={barStyle} />
        <style>
          {`
            @keyframes loadingBarAnim {
              0% { transform: translateX(-100%); }
              50% { transform: translateX(0%); }
              100% { transform: translateX(100%); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default LoadingBar;
