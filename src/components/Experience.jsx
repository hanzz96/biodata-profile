
import { GamingRoomBeta } from "./GamingRoomBeta";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { useControls } from "leva";

function Light() {
  const ref = useRef();
  const [directionalPosition, setDirectionalPosition] = useState([
    13.1, 12.0, 10.5,
  ]);
  const [directionalSetting, setDirectionalSetting] = useState({
    intensity: 3,
  });

  const [orthoCameraSetting, setOrthoCamera] = useState([
    -12.2, 11.3, 7.6, -7.3, 0.1, 50,
  ]);

  const [pointCameraSetting, setPointCamera] = useState([3, 7, -1, 500]);
  const { x, y, z, intensity } = useControls("directionalLight settings", {
    x: { value: directionalPosition[0], min: -50, max: 50, step: 0.1 },
    y: { value: directionalPosition[1], min: -50, max: 50, step: 0.1 },
    z: { value: directionalPosition[2], min: -50, max: 50, step: 0.1 },
    intensity: { value: directionalSetting.intensity, min: 0, max: 10 },
  });

  useEffect(() => {
    setDirectionalPosition([x, y, z]);
    setDirectionalSetting({ intensity });
  }, [x, y, z, intensity]);

  const { left, right, top, bottom, near, far } = useControls(
    "orthographicCamera settings",
    {
      left: { value: orthoCameraSetting[0], min: -50, max: 50, step: 0.1 },
      right: { value: orthoCameraSetting[1], min: -50, max: 50, step: 0.1 },
      top: { value: orthoCameraSetting[2], min: -50, max: 50, step: 0.1 },
      bottom: { value: orthoCameraSetting[3], min: -50, max: 10 },
      near: { value: orthoCameraSetting[4], min: -50, max: 50 },
      far: { value: orthoCameraSetting[5], min: -50, max: 50 },
    }
  );

  useEffect(() => {
    setOrthoCamera([left, right, top, bottom, near, far]);
  }, [left, right, top, bottom, near, far]);

  const { xPl, yPl, zPl, powerPl } = useControls("pointLight settings", {
    xPl: { value: pointCameraSetting[0], min: -50, max: 50, step: 0.1 },
    yPl: { value: pointCameraSetting[1], min: -50, max: 50, step: 0.1 },
    zPl: { value: pointCameraSetting[2], min: -50, max: 50, step: 0.1 },
    powerPl: { value: pointCameraSetting[3], min: 0, max: 1000 },
  });

  useEffect(() => {
    setPointCamera([xPl, yPl, zPl, powerPl]);
  }, [xPl, yPl, zPl, powerPl]);

  return (
    <group ref={ref}>
      <directionalLight
        position={directionalPosition}
        castShadow
        intensity={directionalSetting.intensity}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera attach="shadow-camera" args={orthoCameraSetting} />
      </directionalLight>

      <pointLight position={pointCameraSetting} power={powerPl} />
    </group>
  );
}

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
        <Light />
        <fog attach="fog" args={["#d0d0d0", 1, 35]} />
        {/* <Sky inclination={0.7} scale={100} /> */}
        <ambientLight intensity={1} />
        <GamingRoomBeta></GamingRoomBeta>
      </motion.group>
    </>
  );
};
