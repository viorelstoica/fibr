import { Environment, OrbitControls, useFBX, useGLTF } from "@react-three/drei";

function Scene() {
  const fbx = useFBX('/g1.fbx')
  console.log(fbx)
  return <primitive object={fbx} scale={[0.1, 0.1, 0.1]} />
}

export const Girl = () => {

  return (
    <>
      <OrbitControls />
      <Scene />
      <mesh>
        <boxGeometry args={[2, 2, 2]}/>
        <meshStandardMaterial />
      </mesh>
      <ambientLight intensity={1.0} />
      <Environment preset="sunset" />
      <directionalLight position={[5, 5, 5]} intensity={2.0} castShadow />
    </>
  );
};
