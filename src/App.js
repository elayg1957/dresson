import React, { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const set1 = document.getElementById("set1");
    if (set1) {
      set1.setAttribute("visible", isVisible);
    }
  }, [isVisible]); // Runs when isVisible changes

  return (
    <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 100 }}>
      <button 
        onClick={() => setIsVisible(!isVisible)}
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
        {isVisible ? "Hide Set 1" : "Show Set 1"}
      </button>
    </div>
  );
}

export default App;