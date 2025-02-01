import React from "react";

function App() {
  return (
    <a-scene embedded arjs="sourceType: webcam;">
      <a-entity camera position="0 1.6 0" wasd-controls-enabled="false" look-controls-enabled="false" fov="60"></a-entity>
      </a-scene>
  );
}

export default App;