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
    <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 100 }}>
      <button 
        onClick={() => setShowSet1(!showSet1)}
        style={{
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {showSet1 ? "Show Set 2" : "Show Set 1"}
      </button>
    </div>
  );
}

export default App;