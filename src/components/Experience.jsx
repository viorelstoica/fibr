import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { color } from "three/tsl";
import { useControls } from 'leva'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useLoader } from '@react-three/fiber'
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";

function Scene1() {
  const obj = useLoader(OBJLoader, 'g4.obj')
  return <primitive object={obj} />
}

function Scene2() {
  const fbx = useFBX('/g1.fbx')
  //const fbx = useFBX('/underbelly.fbx')
  return <primitive object={fbx} />
}

function Scene3() {
  // const mat = new MTLLoader().setPath('/').load('g4.mtl');
  //const obj = new OBJLoader().setMaterials(mat).load('g4.obj');
  const mat = useLoader(MTLLoader, 'g4.mtl')
  const obj = useLoader(OBJLoader, 'g4.obj')
  return <primitive object={obj} />
}

function Scene4() {
  const dae = useLoader(ColladaLoader, 'g1.dae');
  console.log(dae)
  return <primitive object={dae} />
}

function Scene() {
  //const obj = useLoader(GLTFLoader, '69637ed02c16a23c583c6496.glb')
  const obj = useLoader(GLTFLoader, '/viorel.glb')
  return <primitive object={obj} scale={0.1}/>
}

export const Experience = () => {

  //const { posx } = useControls({posx: 10})
  return (
    <>
      <OrbitControls />
      <Scene2 />
      <ambientLight intensity={1.0} />
      <Environment preset="sunset" />
      <directionalLight position={[5, 5, 5]} intensity={2.0} castShadow />
    </>
  );
};
