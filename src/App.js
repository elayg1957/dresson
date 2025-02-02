import React from "react";

function App() {
  return (
    <a-scene embedded arjs="sourceType: webcam;">
      <a-camera></a-camera>
    </a-scene>
  );
}

export default App;