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
  }, [showSet1]);

  return (
    <>
      {/* Left & Right Arrows (Switch Sets) */}
      <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: 100, width: "60px" }}>
        <button className="button-27" onClick={() => setShowSet1(false)}>←</button>
      </div>

      <div style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 100, width: "60px" }}>
        <button className="button-27" onClick={() => setShowSet1(true)}>→</button>
      </div>

      {/* Question Mark Buttons - Only One Per Furniture Item */}
      <div>
        {showSet1 ? (
          <>
            {/* Set 1 - Scan Furniture */}
            <button className="question-button" style={{ position: "absolute", top: "40%", left: "50%", zIndex: 200 }}
              onClick={() => alert("Scan Sofa Information")}>?</button>

            <button className="question-button" style={{ position: "absolute", top: "50%", left: "45%", zIndex: 200 }}
              onClick={() => alert("Scan Low Table Information")}>?</button>

            <button className="question-button" style={{ position: "absolute", top: "60%", left: "50%", zIndex: 200 }}
              onClick={() => alert("Scan Carpet Information")}>?</button>

            <button className="question-button" style={{ position: "absolute", top: "40%", left: "30%", zIndex: 200 }}
              onClick={() => alert("Scan Couch Information")}>?</button>

            <button className="question-button" style={{ position: "absolute", top: "45%", left: "20%", zIndex: 200 }}
              onClick={() => alert("Floor Lamp Information")}>?</button>
          </>
        ) : (
          <>
            {/* Set 2 - Outdoor Furniture */}
            <button className="question-button" style={{ position: "absolute", top: "50%", left: "70%", zIndex: 200 }}
              onClick={() => alert("Outdoor Couch Information")}>?</button>

            <button className="question-button" style={{ position: "absolute", top: "50%", left: "60%", zIndex: 200 }}
              onClick={() => alert("Outdoor Chair Information")}>?</button>

            <button className="question-button" style={{ position: "absolute", top: "55%", left: "75%", zIndex: 200 }}
              onClick={() => alert("Outdoor 2 Sofa Information")}>?</button>
          </>
        )}
      </div>

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

          .question-button {
            background-color: white;
            color: black;
            border: 2px solid black;
            border-radius: 50%;
            font-size: 24px;
            font-weight: bold;
            width: 40px;
            height: 40px;
            margin: 10px;
            cursor: pointer;
          }
          .question-button:hover {
            background-color: black;
            color: white;
          }
        `}
      </style>
    </>
  );
}

export default App;
