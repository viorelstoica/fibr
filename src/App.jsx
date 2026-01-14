import { Canvas, extend } from "@react-three/fiber";
import { Girl } from "./components/Girl";
import { Girl1 } from "./components/Girl1";
import { Viorel } from "./components/Viorel";
import { Environment, OrbitControls, PerspectiveCamera, useFBX, useGLTF } from "@react-three/drei";
import { useControls, Leva } from 'leva'
import * as THREE from "three/webgpu";
import { useRef, useEffect, useLayoutEffect, useMemo } from 'react'

function App() {

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: 50, step: 2 },
      y: { value: 0, min: 0, max: 50, step: 2 },
      z: { value: 0, min: 0, max: 50, step: 2 },
      visible: true,
      color: { value: 'lime' }
    }
  }, [])

  const { cam } = useRef(null)

  const pC = useControls('Camera', options)
  const pV = useControls('Viorel', options)


  useEffect(() => {
    console.log(cam)
    //cam.lookAt(0, 2, 0)
  }, [])

  return (
    <>
      <Leva />
      <Canvas shadows
        gl={async (props) => {
          extend(THREE);
          const renderer = new THREE.WebGPURenderer(props);
          await renderer.init();
          return renderer;
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <PerspectiveCamera makeDefault position={[pC.x, pC.y, pC.z]} />
        <OrbitControls />
        <ambientLight intensity={1.0} />
        <Environment preset="sunset" />
        <directionalLight position={[5, 5, 5]} intensity={2.0} castShadow />
        <Viorel position={[pV.x, pV.y, pV.z]} />
        <Viorel position={[0, 0, 1]} />
        <Viorel position={[0, 0, 2]} />
        <Viorel position={[1, 0, 0]} />
        <Viorel position={[1, 0, 1]} />
        <Viorel position={[1, 0, 2]} />
        <Viorel position={[2, 0, 0]} />
        <Viorel position={[2, 0, 1]} />
        <Viorel position={[2, 0, 2]} />
      </Canvas>
    </>
  );
}

export default App;
