
import React from "react";

const ConfettiStyles = () => {
  return (
    <style>
      {`
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          z-index: 1000;
          animation: fall linear forwards;
        }
        
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}
    </style>
  );
};

export default ConfettiStyles;
