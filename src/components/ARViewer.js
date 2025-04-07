import React, { useEffect } from "react";

export default function ARViewer({ showSet1 }) {
  useEffect(() => {
    // Example: If you want to label your "buttons" after the models load
    const assignGeometry = () => {
      const buttons = document.querySelectorAll('[id$="-button"]');
      buttons.forEach((btn) => {
        btn.setAttribute("geometry", "primitive: circle; radius: 0.1");
        btn.setAttribute("text", "value: ?; align: center; color: black;");
        btn.setAttribute("material", "color: white");
      });
    };
    setTimeout(assignGeometry, 1000);
  }, []);

  return (
    <a-scene
      embedded
      /* Key WebXR attribute for markerless AR: */
      webxr="mode: 'immersive-ar'; referenceSpaceType: local-floor;"
      xrwebgllighting="enabled: true"
      vr-mode-ui="enabled: false"
      renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
    >
      {/* Preload 3D models */}
      <a-assets timeout="10000">
        {/* Make sure these .glb files exist in public/assets/ (adjust paths if needed) */}
        <a-asset-item id="sofa" src="./assets/scan_sofa.glb" />
        <a-asset-item id="lowtable" src="./assets/scan_low_table.glb" />
        <a-asset-item id="carpet" src="./assets/scan_carpet.glb" />
        <a-asset-item id="couch" src="./assets/scan_couch.glb" />
        <a-asset-item id="lamp" src="./assets/floor_lamp.glb" />
        <a-asset-item id="outdoor-couch" src="./assets/outdoor_couch.glb" />
        <a-asset-item id="outdoor-chair" src="./assets/outdoor_chair.glb" />
      </a-assets>

      {showSet1 ? (
        <>
          {/* Indoor Set */}
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
          {/* Outdoor Set */}
          <a-gltf-model src="#outdoor-couch" position="0 0 -2.5" scale="2 2 2" />
          <a-entity id="outdoor_couch-button" position="0 1 -2.5" />

          <a-gltf-model src="#outdoor-chair" position="1 0 -1.5" scale="2 2 2" />
          <a-entity id="outdoor_chair-button" position="1 0.5 -1.5" />
        </>
      )}

      {/* Lighting */}
      <a-light type="directional" intensity="1" position="2 4 2"></a-light>
      <a-light type="ambient" intensity="0.5"></a-light>

      {/* Standard A-Frame camera */}
      <a-entity camera />
    </a-scene>
  );
}
