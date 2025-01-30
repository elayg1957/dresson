import React from "react";
import "aframe";
import "aframe-ar";

const ARViewer = () => {
  return (
    <a-scene embedded arjs>
      {/* Lighting */}
      <a-light type="directional" position="0 5 5"></a-light>

      {/* Camera */}
      <a-camera position="0 0 0" look-controls="enabled"></a-camera>

      {/* Set 1 (Red, Green, Blue) */}
      <a-entity id="set1" position="0 0 0">
        <a-box
          id="redbox"
          position="-3 0 -10"
          rotation="0 45 0"
          color="red"
          depth="1"
          height="1"
          width="1"
        ></a-box>
        <a-box
          id="bluebox"
          position="0 0 -10"
          rotation="0 45 0"
          color="blue"
          depth="1"
          height="1"
          width="1"
        ></a-box>
        <a-box
          id="greenbox"
          position="3 0 -10"
          rotation="0 45 0"
          color="green"
          depth="1"
          height="1"
          width="1"
        ></a-box>
      </a-entity>

      {/* Set 2 (Black, Orange, Yellow) */}
      <a-entity id="set2" position="10 0 0">
        <a-box
          id="blackbox"
          position="-3 0 -10"
          rotation="0 45 0"
          color="black"
          depth="1"
          height="1"
          width="1"
        ></a-box>
        <a-box
          id="orangebox"
          position="0 0 -10"
          rotation="0 45 0"
          color="orange"
          depth="1"
          height="1"
          width="1"
        ></a-box>
        <a-box
          id="yellowbox"
          position="3 0 -10"
          rotation="0 45 0"
          color="yellow"
          depth="1"
          height="1"
          width="1"
        ></a-box>
      </a-entity>
    </a-scene>
  );
};

export default ARViewer;