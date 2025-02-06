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
    <div 
      style={{
        position: "fixed",
        bottom: "20px", // Moves button towards the bottom
        left: "50%", // Centers horizontally
        transform: "translateX(-50%)", // Ensures proper centering
        zIndex: 100
      }}
    >
      <button 
        onClick={() => setShowSet1(!showSet1)}
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        {showSet1 ? "Show Set 2" : "Show Set 1"}
      </button>
    </div>
  );
}

export default App;
