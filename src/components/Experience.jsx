import { OrbitControls } from "@react-three/drei";
import { GamingRoomBeta } from "./GamingRoomBeta";
import { motion } from "framer-motion-3d";

const positionLight = [7, 7, -1];

export const Experience = (props) => {
  const { section } = props;
  return (
    <>
      <motion.group
        position={[5.5, 15, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4.5}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <directionalLight
          position={[3, 7, -1]}
          castShadow
          shadow-mapSize-width={1024} // Adjust shadow resolution
          shadow-mapSize-height={1024} // Adjust shadow resolution
          shadow-camera-near={0.5} // Adjust shadow camera properties
          shadow-camera-far={20}
          shadow-bias={-0.0001}
        />
        <pointLight position={[3, 7, -1]} power={500} />
        <ambientLight intensity={0.5} />
        <GamingRoomBeta></GamingRoomBeta>
      </motion.group>
    </>
  );
};
