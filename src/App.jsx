import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Canvas, useThree, useFrame  } from "@react-three/fiber";
import { Scroll, ScrollControls, OrbitControls, useHelper  } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import DebugCamera from "./Debugger/DebugCamera";
import { Leva, useControls } from 'leva';
import { PointLightHelper } from 'three'
import * as THREE from "three";
import { Environment } from '@react-three/drei';



function SceneLights() {
  const { lightPosition, intensity, color, castShadow, radius } = useControls('Point Light', {
    lightPosition: { value: [5, 5, 5], step: 0.5 },
    intensity: { value: 2.5, min: 0, max: 500, step: 0.1 },
    color: '#ffffff',
    castShadow: true,
    radius : { value: 1, min: 0, max: 10, step: 0.1 },
  });

  // const lightRef = useRef()
  // useHelper(lightRef, PointLightHelper, 1, 'hotpink')
  return (
    <pointLight
      // ref={lightRef}
      position={lightPosition}
      intensity={intensity}
      color={color}
      castShadow={castShadow}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
  );
}

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);


  return (
    <>
      <MotionConfig
        transition={{
          type: "string",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
          <Canvas gl={{ outputEncoding: THREE.sRGBEncoding }} shadows shadowmap="true" camera={{
          position: [3.08, 3.28, 3.29],
          rotation: [-0.03, -0.67, -0.02],
          fov: 60
        }}>
          <ambientLight intensity={0.3} />
          <SceneLights/>

              {/* apartment: string;
                  city: string;
                  dawn: string;
                  forest: string;
                  lobby: string;
                  night: string;
                  park: string;
                  studio: string;
                  sunset: string;
                  warehouse: string; */}
          <Environment preset="city"/>

          <ScrollControls pages={5} damping={0.3}>
            <ScrollManager
              section={section}
              onSectionChange={setSection}
            ></ScrollManager>
            <Scroll>
              <Experience section={section} />
            </Scroll>
            {/* <OrbitControls /> */}
            <Scroll html>
              <Interface></Interface>
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        ></Menu>
      </MotionConfig>
    </>
  );
}

export default App;
