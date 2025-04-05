import React, { useEffect } from "react";

export default function ARViewer({ showSet1 }) {
  useEffect(() => {
    const assignGeometry = () => {
      const buttons = document.querySelectorAll('[id$="-button"]');
      buttons.forEach(btn => {
        btn.setAttribute("geometry", "primitive: circle; radius: 0.05");
      });
    };
    assignGeometry();
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
    >
      {/* Indoor set */}
      {showSet1 ? (
        <>
          <a-gltf-model src="/dresson/assets/scan_sofa.glb" position="0 0 -2.5" scale="0.7 0.7 0.7" />
          <a-entity id="scan_sofa-button" position="0 0.4 -2.5" text="value: ?;" material="color: white" />

          <a-gltf-model src="/dresson/assets/scan_low_table.glb" position="0 0 -1.3" scale="0.5 0.5 0.5" />
          <a-entity id="scan_low_table-button" position="0 0 -1.3" text="value: ?;" material="color: white" />

          <a-gltf-model src="/dresson/assets/scan_carpet.glb" position="0 -0.5 -2" scale="1.2 0.65 0.65" />
          <a-entity id="scan_carpet-button" position="0 -1 -2" text="value: ?;" material="color: white" />

          <a-gltf-model src="/dresson/assets/scan_couch.glb" position="-1 0 -1.8" scale="0.35 0.35 0.35" />
          <a-entity id="scan_couch-button" position="-1 0.3 -1.8" text="value: ?;" material="color: white" />

          <a-gltf-model src="/dresson/assets/floor_lamp.glb" position="-0.75 0 -2" scale="0.05 0.05 0.05" />
          <a-entity id="floor-lamp-button" position="-0.75 0.5 -2" text="value: ?;" material="color: white" />
        </>
      ) : (
        <>
          <a-gltf-model src="/dresson/assets/outdoor_couch.glb" position="0 -1 -4" scale="0.6 0.6 0.6" />
          <a-entity id="outdoor_couch-button" position="-0.2 0.3 -2.5" text="value: ?;" material="color: white" />

          <a-gltf-model src="/dresson/assets/outdoor_chair.glb" position="1 0 -1.5" scale="0.5 0.5 0.5" />
        </>
      )}

      <a-light type="directional" intensity="1" position="2 4 2"></a-light>
      <a-light type="ambient" intensity="0.5"></a-light>
      <a-camera />
    </a-scene>
  );
}
