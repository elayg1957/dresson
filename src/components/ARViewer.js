import React, { useEffect } from "react";

const ARViewer = ({ showSet1 }) => {
  useEffect(() => {
    // This runs after the DOM mounts
    document.addEventListener("DOMContentLoaded", () => {
      const buttons = [
        "outdoor_couch-button",
        "floor_lamp-button",
        "scan_sofa-button",
        "scan_carpet-button",
        "scan_couch-button",
        "scan_low_table-button",
      ];
      buttons.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.setAttribute("geometry", "primitive: circle; radius: 0.05");
        }
      });
    });
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
    >
      <a-light type="directional" intensity="1" position="2 4 2" castshadow="true"></a-light>
      <a-light type="ambient" intensity="0.5"></a-light>
      <a-camera></a-camera>

      {/* Couch Set 1 */}
      {showSet1 && (
        <a-entity id="set1" position="0 0.5 -2" visible="true">
          <a-gltf-model
            src="assets/scan_sofa.glb"
            position="0 0 -2.5"
            scale="0.7 0.7 0.7"
            rotation="0 0 0"
          >
            <a-entity
              id="scan_sofa-button"
              position="0 0.4 0"
              material="color: #f8f8f8; shader: flat; side: double; opacity: 0.9;"
              text="value: ?; align: center; color: black; baseline: center;"
            ></a-entity>
          </a-gltf-model>

          <a-gltf-model
            src="assets/scan_low_table.glb"
            position="0 0 -1.3"
            scale="0.5 0.5 0.5"
            rotation="0 0 0"
          >
            <a-entity
              id="scan_low_table-button"
              position="0 0.3 0"
              material="color: #f8f8f8; shader: flat; side: double; opacity: 0.9;"
              text="value: ?; align: center; color: black; baseline: center;"
            ></a-entity>
          </a-gltf-model>

          <a-gltf-model
            src="assets/scan_carpet.glb"
            position="0 -0.5 -2"
            scale="1.2 0.65 0.65"
            rotation="0 0 0"
          >
            <a-entity
              id="scan_carpet-button"
              position="0 0.2 0"
              material="color: #f8f8f8; shader: flat; side: double; opacity: 0.9;"
              text="value: ?; align: center; color: black; baseline: center;"
            ></a-entity>
          </a-gltf-model>

          <a-gltf-model
            src="assets/scan_couch.glb"
            position="-1 0 -1.8"
            scale="0.35 0.35 0.35"
            rotation="0 45 0"
          >
            <a-entity
              id="scan_couch-button"
              position="0 0.5 0"
              material="color: #f8f8f8; shader: flat; side: double; opacity: 0.9;"
              text="value: ?; align: center; color: black; baseline: center;"
            ></a-entity>
          </a-gltf-model>

          <a-gltf-model
            src="assets/floor_lamp.glb"
            position="-0.75 0 -2"
            scale="0.05 0.05 0.05"
            rotation="0 270 0"
          >
            <a-entity
              id="floor_lamp-button"
              position="0 0.8 0"
              material="color: #f8f8f8; shader: flat; side: double; opacity: 0.9;"
              text="value: ?; align: center; color: black; baseline: center;"
            ></a-entity>
          </a-gltf-model>
        </a-entity>
      )}
    </a-scene>
  );
};

export default ARViewer;