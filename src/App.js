import React from "react";

function App() {
  return (
    <a-scene 
      embedded 
      arjs="sourceType: webcam;"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
      xr-mode-ui="enabled: false"
    > 
      <a-entity light="type:directional; castShadow:true; color:white; intensity:1.0" position="5 10 7"></a-entity>
      <a-camera position="0 2 2"></a-camera>
      <a-box xrextras-one-finger-rotate position="0 0.5 0" material="color: #AD50FF;" shadow></a-box>
      <a-plane height="2000" width="2000" rotation="-90 0 0" material="shader: shadow; opacity: 0.67" shadow></a-plane> 
    </a-scene>
  );
}

export default App;