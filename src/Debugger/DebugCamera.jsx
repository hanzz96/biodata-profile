import { useThree } from '@react-three/fiber'
import { useEffect, useState } from "react";
function DebugCamera() {
  const { camera } = useThree()

  console.log('Camera position:', camera.position)
  console.log('Camera rotation:', camera.rotation)

  // Expose to browser console (optional)
  useEffect(() => {
    window.camera = camera
  }, [camera])

  return null
}

export default DebugCamera;