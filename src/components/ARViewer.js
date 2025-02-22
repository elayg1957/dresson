import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { XR } from "@react-three/xr"; // Removed ARButton
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url, position, scale }) {
  const { scene } = useGLTF(url, true); // Enable Draco Compression
  return <primitive object={scene} position={position} scale={scale} />;
}

export default function ARViewer({ showSet1 }) {
  return (
    <>
      {/* Replace ARButton with a normal button */}
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          background: "black",
          color: "white",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          if (navigator.xr) {
            navigator.xr.requestSession("immersive-ar").then((session) => {
              session.addEventListener("end", () => console.log("AR Session Ended"));
            });
          } else {
            alert("WebXR not supported on this device.");
          }
        }}
      >
        Enter AR
      </button>

      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Suspense fallback={null}>
            {/* Show Set 1 (Scan Furniture) */}
            {showSet1 && (
              <>
                <Model url="assets/scan_sofa_draco.glb" position={[0, 0, -2.5]} scale={[0.7, 0.7, 0.7]} />
                <Model url="assets/scan_low_table_draco.glb" position={[0, 0, -1.3]} scale={[0.5, 0.5, 0.5]} />
                <Model url="assets/scan_carpet_draco.glb" position={[0, -0.5, -2]} scale={[1.2, 0.65, 0.65]} />
                <Model url="assets/scan_couch_draco.glb" position={[-1, 0, -1.8]} scale={[0.35, 0.35, 0.35]} />
                <Model url="assets/floor_lamp_draco.glb" position={[-1, 0, -1]} scale={[0.3, 0.3, 0.3]} />
              </>
            )}

            {/* Show Set 2 (Outdoor Furniture) */}
            {!showSet1 && (
              <>
                <Model url="assets/outdoor_couch_draco.glb" position={[0, -1, -4]} scale={[0.6, 0.6, 0.6]} />
                <Model url="assets/outdoor_chair_draco.glb" position={[1, 0, -1.5]} scale={[0.5, 0.5, 0.5]} />
                <Model url="assets/outdoor_2sofa_draco.glb" position={[0, 0, -2]} scale={[0.6, 0.6, 0.6]} />
              </>
            )}
          </Suspense>

          <OrbitControls />
        </XR>
      </Canvas>
    </>
  );
}
