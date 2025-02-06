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
          zIndex: 100
        }}
      >
        <button 
          onClick={() => setShowSet1(true)}
          style={{
            padding: "12px 16px",
            fontSize: "20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer"
          }}
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
          zIndex: 100
        }}
      >
        <button 
          onClick={() => setShowSet1(false)}
          style={{
            padding: "12px 16px",
            fontSize: "20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        >
          →
        </button>
      </div>
    </>
  );
}

export default App;
