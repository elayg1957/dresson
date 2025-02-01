import React from "react";

function App() {
  return (
    <a-scene 
      embedded 
      arjs="sourceType: webcam;"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
    >
      <a-box 
        position="0 1 -3" 
        rotation="0 45 0" 
        color="red" 
        depth="0.5" 
        height="0.5" 
        width="0.5"
      ></a-box>

      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default App;