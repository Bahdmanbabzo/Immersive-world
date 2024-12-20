import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "motion/react";

export default function Lights({ isFullscreen }) {
    const three = useThree();
    useFrame(() => {
      three.camera.lookAt(0, 0, 0);
    });
    return (
      <>
        <ambientLight intensity={0.2} />
        <pointLight position={[-10, -10, 10]} intensity={2} color="#ff20f0" />
        <pointLight
          position={[0, 0.5, -1]}
          distance={1}
          intensity={2}
          color="#e4be00"
        />
        <motion.directionalLight
          castShadow
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          initial={false}
          animate={isFullscreen ? { x: 0, y: 8, z: 5 } : { x: 4, y: 3, z: 3 }}
        />
      </>
    );
  }