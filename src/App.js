import React from "react";

function App() {
  return (
    <a-scene embedded arjs="sourceType: webcam;">
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default App;