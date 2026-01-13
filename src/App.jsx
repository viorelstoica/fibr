import { Canvas, extend } from "@react-three/fiber";
import { Girl } from "./components/Girl";
import { Girl1 } from "./components/Girl1";
import { Viorel } from "./components/Viorel";
import { Environment, OrbitControls, useFBX, useGLTF } from "@react-three/drei";

import * as THREE from "three/webgpu";

function App() {
  return (
    <Canvas shadows camera={{ position: [13, 13, 83], fov: 30 }}
      gl={async (props) => {
        extend(THREE);
        const renderer = new THREE.WebGPURenderer(props);
        await renderer.init();
        return renderer;
      }}
    >
      <color attach="background" args={["#ececec"]} />
      <OrbitControls />
      <ambientLight intensity={1.0} />
      <Environment preset="sunset" />
      <directionalLight position={[5, 5, 5]} intensity={2.0} castShadow />
      <Viorel />
    </Canvas>
  );
}

export default App;
