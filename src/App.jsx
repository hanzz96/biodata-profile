import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Experience } from './components/Experience'
import { Interface } from './components/Interface'

function App() {
  return (
    // <>
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={5} damping={0.1}>
        <Experience />
        <Scroll html>
          <Interface></Interface>
        </Scroll>
      </ScrollControls>
    </Canvas>

    // </>
  )
}

export default App
