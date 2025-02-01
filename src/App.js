import React from "react";

function App() {
  return (
    <a-scene 
      embedded 
      arjs="sourceType: webcam;"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
      xr-mode-ui="enabled: false"
    >
      <!-- Lighting for better visibility -->
      <a-entity 
        light="type: directional; intensity: 1.0; castShadow: true; color: white" 
        position="5 10 7"
      ></a-entity>

      <!-- Camera -->
      <a-camera position="0 2 2"></a-camera>

      <!-- Red Cube with Rotation -->
      <a-box 
        xrextras-one-finger-rotate
        position="0 0.5 -2"
        material="color: red"
        shadow
      ></a-box>

      <!-- Ground Plane for Reference -->
      <a-plane 
        height="2000" 
        width="2000" 
        rotation="-90 0 0" 
        material="shader: shadow; opacity: 0.67"
        shadow
      ></a-plane>
      
    </a-scene>
  );
}

export default App;