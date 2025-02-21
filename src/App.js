import React, { useState } from "react";
import ARViewer from "./components/ARViewer";

function App() {
  const [showSet1, setShowSet1] = useState(true);

  return (
    <>
      {/* Left & Right Arrows (Switch Sets) */}
      <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: 100, width: "60px" }}>
        <button className="button-27" onClick={() => setShowSet1(false)}>←</button>
      </div>

      <div style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 100, width: "60px" }}>
        <button className="button-27" onClick={() => setShowSet1(true)}>→</button>
      </div>

      {/* Render ARViewer (Handles WebXR & 3D Models) */}
      <ARViewer showSet1={showSet1} />

      {/* Global Styles */}
      <style>
        {`
          .button-27 {
            appearance: none;
            background-color: #000000;
            border: 2px solid #1A1A1A;
            border-radius: 15px;
            color: #FFFFFF;
            cursor: pointer;
            font-size: 30px;
            font-weight: 600;
            padding: 16px 24px;
            text-align: center;
            transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
            user-select: none;
            touch-action: manipulation;
            width: 100%;
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
