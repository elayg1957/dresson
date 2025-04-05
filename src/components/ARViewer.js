import React, { useEffect } from "react";

export default function ARViewer({ showSet1 }) {
  useEffect(() => {
    const assignGeometry = () => {
      const buttons = document.querySelectorAll('[id$="-button"]');
      buttons.forEach(btn => {
        btn.setAttribute("geometry", "primitive: circle; radius: 0.1");
        btn.setAttribute("text", "value: ?; align: center; color: black;");
        btn.setAttribute("material", "color: white");
      });
    };
    setTimeout(assignGeometry, 1000); // Delay to ensure models are loaded
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
    >
      {/* Asset preloading */}
      <a-assets timeout="10000">
        <a-asset-item id="sofa" src="/dresson/assets/scan_sofa.glb" />
        <a-asset-item id="lowtable" src="/dresson/assets/scan_low_table.glb" />
        <a-asset-item id="carpet" src="/dresson/assets/scan_carpet.glb" />
        <a-asset-item id="couch" src="/dresson/assets/scan_couch.glb" />
        <a-asset-item id="lamp" src="/dresson/assets/floor_lamp.glb" />
        <a-asset-item id="outdoor-couch" src="/dresson/assets/outdoor_couch.glb" />
        <a-asset-item id="outdoor-chair" src="/dresson/assets/outdoor_chair.glb" />
      </a-assets>

      {/* Indoor set */}
      {showSet1 ? (
        <>
          <a-gltf-model src="#sofa" position="0 0 -2.5" scale="2 2 2" />
          <a-entity id="scan_sofa-button" position="0 1 -2.5" />

          <a-gltf-model src="#lowtable" position="0 0 -1.3" scale="2 2 2" />
          <a-entity id="scan_low_table-button" position="0 0.5 -1.3" />

          <a-gltf-model src="#carpet" position="0 -0.5 -2" scale="2 2 2" />
          <a-entity id="scan_carpet-button" position="0 -0.2 -2" />

          <a-gltf-model src="#couch" position="-1 0 -1.8" scale="2 2 2" />
          <a-entity id="scan_couch-button" position="-1 0.5 -1.8" />

          <a-gltf-model src="#lamp" position="-0.75 0 -2" scale="2 2 2" />
          <a-entity id="floor_lamp-button" position="-0.75 0.5 -2" />
        </>
      ) : (
        <>
          <a-gltf-model src="#outdoor-couch" position="0 0 -2.5" scale="2 2 2" />
          <a-entity id="outdoor_couch-button" position="0 1 -2.5" />

          <a-gltf-model src="#outdoor-chair" position="1 0 -1.5" scale="2 2 2" />
          <a-entity id="outdoor_chair-button" position="1 0.5 -1.5" />
        </>
      )}

      <a-light type="directional" intensity="1" position="2 4 2"></a-light>
      <a-light type="ambient" intensity="0.5"></a-light>
      <a-camera />
    </a-scene>
  );
}
