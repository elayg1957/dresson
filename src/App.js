import React from "react";

function App() {
  return (
    <a-scene embedded arjs="sourceType: webcam;">
      <a-box 
        position="0 1 -3" 
        rotation="0 45 0" 
        color="red" 
        depth="0.5" 
        height="0.5" 
        width="0.5"
        animation="property: position; to: 0 1.5 -3; dir: alternate; dur: 1500; loop: true"
      ></a-box>

      <a-camera></a-camera>
    </a-scene>
  );
}

export default App;