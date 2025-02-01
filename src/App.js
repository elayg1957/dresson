import React from "react";

function App() {
  return (
    <a-scene 
      embedded 
      arjs="sourceType: webcam;"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
    >
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default App;