import React, { useState, useEffect } from "react";

function App() {
  const [showSet1, setShowSet1] = useState(true);

  useEffect(() => {
    const set1 = document.getElementById("set1");
    const set2 = document.getElementById("set2");

    if (set1 && set2) {
      set1.setAttribute("visible", showSet1);
      set2.setAttribute("visible", !showSet1);
    }
  }, [showSet1]); // Runs when showSet1 changes

  return (
    <>
      {/* Left Arrow Button (Shows Set 2) */}
      <div 
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px", // Aligns to bottom-left
          zIndex: 100,
          width: "60px"
        }}
      >
        <button 
          className="button-27"
          onClick={() => setShowSet1(false)}
        >
          ←
        </button>
      </div>

      {/* Right Arrow Button (Shows Set 1) */}
      <div 
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px", // Aligns to bottom-right
          zIndex: 100,
          width: "60px"
        }}
      >
        <button 
          className="button-27"
          onClick={() => setShowSet1(true)}
        >
          →
        </button>
      </div>

      {/* Global Styles */}
      <style>
        {`
          .button-27 {
            appearance: none;
            background-color: #000000;
            border: 2px solid #1A1A1A;
            border-radius: 15px;
            box-sizing: border-box;
            color: #FFFFFF;
            cursor: pointer;
            display: inline-block;
            font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-size: 30px;
            font-weight: 600;
            line-height: normal;
            margin: 0;
            min-height: 60px;
            min-width: 0;
            outline: none;
            padding: 16px 24px;
            text-align: center;
            text-decoration: none;
            transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: 100%;
            will-change: transform;
          }

          .button-27:disabled {
            pointer-events: none;
          }

          .button-27:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
            transform: translateY(-2px);
          }

          .button-27:active {
            box-shadow: none;
            transform: translateY(0);
          }
        `}
      </style>
    </>
  );
}

export default App;
