import React from 'react';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, BrightnessContrast } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'
import { Canvas } from '@react-three/fiber'
import Stars from './components/StarScene/StarScene'
import { OrbitControls } from '@react-three/drei'
// import { Text } from "troika-three-text";
// import fonts from "./components/Text/fonts";

// extend({ Text });
// const text = "GREEFFER";

export default function App() {

  return (
    <Canvas camera={{ fov: 80, position: [0, 0, 1] }}>
      {/* Your regular scene contents go here, like always ... */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={false} />

      <ambientLight />

      <Stars />

      <pointLight position={[-100, 0, -160]} />
      <pointLight position={[0, 0, -170]} />
      <pointLight position={[100, 0, -160]} />
      <EffectComposer multisampling={8}>

        {/* <directionalLight color="blue" position={[0, 0, 5]} /> */}
        <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.2} intensity={0.3} />
        {/* <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} /> */}
        <DepthOfField focusDistance={0.00} focalLength={0.02} bokehScale={2} />
        {/* <Bloom intensity={0} luminanceThreshold={0} luminanceSmoothing={1} /> */}
        {/* <Noise opacity={0.02} /> */}
        <Vignette eskil={true} offset={0.4} darkness={0.4} />
      </EffectComposer>
    </Canvas>
  )
}

/**
export default function App() {

  return (
    <Canvas>
      <Stars />
    </Canvas>
  )
}

/**
// import Sky from './components/SkyScene/SkyScene'
// import Clouds from './components/CloudScene/CloudScene'
// import BackDrop from './components/BackDrop'
// import GradientTexture from './components/GradientTexture'

export default function App() {
  return (
    <Canvas camera={{ fov: 80, position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  )
}

;<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas> */
