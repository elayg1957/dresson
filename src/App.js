import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const [showSet1, setShowSet1] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  useEffect(() => {
    const set1 = document.getElementById("set1");
    const set2 = document.getElementById("set2");

    if (set1 && set2) {
      set1.setAttribute("visible", showSet1);
      set2.setAttribute("visible", !showSet1);
    }
  }, [showSet1]);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsOpen(true);
  };

  return (
    <>
      {/* Left Navigation Button */}
      <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: 100, width: "60px" }}>
        <button className="button-27" onClick={() => setShowSet1(false)}>←</button>
      </div>

      {/* Right Navigation Button */}
      <div style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 100, width: "60px" }}>
        <button className="button-27" onClick={() => setShowSet1(true)}>→</button>
      </div>

      {/* A-Frame AR Scene */}
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        vr-mode-ui="enabled: false"
        renderer="antialias: true; colorManagement: true; highRefreshRate: true;"
      >
        {/* Set 1: Furniture with Interactive Buttons */}
        <a-entity id="set1" position="0 0.5 -2" visible="true">
          <a-gltf-model src="assets/scan_sofa.glb" position="0 0 -2.5" scale="0.7 0.7 0.7"></a-gltf-model>
          <a-entity id="scan_sofa-button" position="0 0.4 -2.5">
            <button className="question-button" onClick={() => openModal("Scan Sofa", "Details about the scan sofa.")}>?</button>
          </a-entity>

          <a-gltf-model src="assets/scan_low_table.glb" position="0 0 -1.3" scale="0.5 0.5 0.5"></a-gltf-model>
          <a-entity id="scan_low_table-button" position="0 0 -1.3">
            <button className="question-button" onClick={() => openModal("Low Table", "This is a modern low table.")}>?</button>
          </a-entity>

          <a-gltf-model src="assets/scan_carpet.glb" position="0 -0.5 -2" scale="1.2 0.65 0.65"></a-gltf-model>
          <a-entity id="scan_carpet-button" position="0 -1 -2">
            <button className="question-button" onClick={() => openModal("Carpet", "A stylish carpet for your space.")}>?</button>
          </a-entity>
        </a-entity>

        {/* Set 2: Furniture with Interactive Buttons */}
        <a-entity id="set2" position="0 0.5 -2" visible="false">
          <a-gltf-model src="assets/outdoor_couch.glb" position="0 0 -2.5" scale="0.25 0.25 0.25"></a-gltf-model>
          <a-entity id="outdoor_couch-button" position="0 0.4 -2.5">
            <button className="question-button" onClick={() => openModal("Outdoor Couch", "A comfortable outdoor couch.")}>?</button>
          </a-entity>

          <a-gltf-model src="assets/outside_twochair.glb" position="-1.5 0 -0.5" scale="0.35 0.35 0.35"></a-gltf-model>
          <a-entity id="outside_twochair-button" position="-1.5 0.4 -0.5">
            <button className="question-button" onClick={() => openModal("Outdoor Chair Set", "Two stylish outdoor chairs.")}>?</button>
          </a-entity>
        </a-entity>
      </a-scene>

      {/* Modal Component */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={modalContent.title} content={modalContent.content} />

      {/* Global Styles */}
      <style>
        {`
          .button-27 {
            appearance: none;
            background-color: #000000;
            border: 2px solid #1A1A1A;
            border-radius: 15px;
            color: #FFFFFF;
            cursor: pointer;
            font-size: 30px;
            font-weight: 600;
            padding: 16px 24px;
            text-align: center;
            transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
            user-select: none;
            touch-action: manipulation;
            width: 100%;
          }
          .button-27:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
            transform: translateY(-2px);
          }
          .button-27:active {
            box-shadow: none;
            transform: translateY(0);
          }

          .question-button {
            background-color: white;
            color: black;
            border: 2px solid black;
            border-radius: 50%;
            font-size: 24px;
            font-weight: bold;
            width: 40px;
            height: 40px;
            cursor: pointer;
          }
          .question-button:hover {
            background-color: black;
            color: white;
          }
        `}
      </style>
    </>
  );
}

export default App;
