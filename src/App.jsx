import { useEffect, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls, OrbitControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";

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
        {/* FFF9B5 */}
        <Canvas shadows shadowMap camera={{ position: [3, 15, 20], fov: 30 }}>
          <ScrollControls pages={5} damping={0.3}>
            <ScrollManager
              section={section}
              onSectionChange={setSection}
            ></ScrollManager>
            <Experience section={section} />

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
