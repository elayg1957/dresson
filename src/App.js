import React, { useState, useEffect } from "react";

function App() {
  const [showSet1, setShowSet1] = useState(true);
  const [cubePosition, setCubePosition] = useState("0 1 -2"); // Default position

  useEffect(() => {
    if (!navigator.xr) {
      console.error("WebXR not supported.");
      return;
    }

    async function setupXR() {
      try {
        const session = await navigator.xr.requestSession("immersive-ar", {
          requiredFeatures: ["hit-test", "local-floor"]
        });

        const referenceSpace = await session.requestReferenceSpace("local-floor");
        const viewerSpace = await session.requestReferenceSpace("viewer");

        const hitTestSource = await session.requestHitTestSource({
          space: viewerSpace
        });

        session.requestAnimationFrame(onXRFrame);

        function onXRFrame(time, frame) {
          session.requestAnimationFrame(onXRFrame);

          const hitTestResults = frame.getHitTestResults(hitTestSource);

          if (hitTestResults.length > 0) {
            let hit = hitTestResults[0];
            let pose = hit.getPose(referenceSpace);

            if (pose) {
              const { x, y, z } = pose.transform.position;
              setCubePosition(`${x} ${y} ${z}`);
            }
          }
        }
      } catch (error) {
        console.error("Error setting up WebXR:", error);
      }
    }

    setupXR();
  }, []);

  return (
    <>
      {/* Left Arrow Button (Shows Set 2) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          zIndex: 100,
          width: "60px"
        }}
      >
        <button className="button-27" onClick={() => setShowSet1(false)}>
          ←
        </button>
      </div>

      {/* Right Arrow Button (Shows Set 1) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 100,
          width: "60px"
        }}
      >
        <button className="button-27" onClick={() => setShowSet1(true)}>
          →
        </button>
      </div>

      {/* Inject A-Frame Scene */}
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        vr-mode-ui="enabled: false"
        renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
      >
        {/* Set 1: Initially Visible */}
        <a-entity id="set1" position={cubePosition} visible={showSet1}>
          <a-box position="-2 0 0" rotation="0 45 0" color="red"></a-box>
          <a-box position="0 0 0" rotation="0 45 0" color="green"></a-box>
          <a-box position="2 0 0" rotation="0 45 0" color="blue"></a-box>
        </a-entity>

        {/* Set 2: Initially Hidden */}
        <a-entity id="set2" position={cubePosition} visible={!showSet1}>
          <a-box position="-2 0 0" rotation="0 45 0" color="orange"></a-box>
          <a-box position="0 0 0" rotation="0 45 0" color="white"></a-box>
          <a-box position="2 0 0" rotation="0 45 0" color="black"></a-box>
        </a-entity>

        <a-camera></a-camera>
      </a-scene>

      {/* Global Styles */}
      <style>
        {`
          .button-27 {
            appearance: none;
            background-color: #000000;
            border: 2px solid #1A1A1A;
            border-radius: 15px;
            box-sizing: border-box;
            color: #FFFFFF;
            cursor: pointer;
            display: inline-block;
            font-size: 30px;
            font-weight: 600;
            margin: 0;
            min-height: 60px;
            padding: 16px 24px;
            text-align: center;
            transition: all 300ms;
            user-select: none;
            width: 100%;
          }
          .button-27:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
            transform: translateY(-2px);
          }
        `}
      </style>
    </>
  );
}

export default App;