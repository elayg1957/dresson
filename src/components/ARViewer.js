import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { XR } from "@react-three/xr";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url, position, scale }) {
  const { scene } = useGLTF(url, true);
  return <primitive object={scene} position={position} scale={scale} />;
}

export default function ARViewer({ showSet1 }) {
  return (
    <>
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
            {showSet1 ? (
              <>
                <Model url="/dresson/assets/scan_sofa.glb" position={[0, 0, -2.5]} scale={[0.7, 0.7, 0.7]} />
                <Model url="/dresson/assets/scan_low_table.glb" position={[0, 0, -1.3]} scale={[0.5, 0.5, 0.5]} />
                <Model url="/dresson/assets/scan_carpet.glb" position={[0, -0.5, -2]} scale={[1.2, 0.65, 0.65]} />
                <Model url="/dresson/assets/scan_couch.glb" position={[-1, 0, -1.8]} scale={[0.35, 0.35, 0.35]} />
                <Model url="/dresson/assets/floor_lamp.glb" position={[-1, 0, -1]} scale={[0.3, 0.3, 0.3]} />
              </>
            ) : (
              <>
                <Model url="/dresson/assets/outdoor_couch.glb" position={[0, -1, -4]} scale={[0.6, 0.6, 0.6]} />
                <Model url="/dresson/assets/outdoor_chair.glb" position={[1, 0, -1.5]} scale={[0.5, 0.5, 0.5]} />
              </>
            )}
          </Suspense>

          <OrbitControls />
        </XR>
      </Canvas>
    </>
  );
}
