import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, BrightnessContrast } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { Canvas } from '@react-three/fiber'
import Stars from './components/StarScene/StarScene'

export default function App() {
  return (
    <Canvas camera={{ fov: 80, position: [0, 0, 1] }}>
      {/* Your regular scene contents go here, like always ... */}
      <Stars />
      <EffectComposer>
        <ambientLight intensity={0.1} />
        {/* <directionalLight color="blue" position={[0, 0, 5]} /> */}

        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} /> */}
        {/* <Bloom intensity={0} luminanceThreshold={0} luminanceSmoothing={1} /> */}
        {/* <Noise opacity={0.02} /> */}
        <Vignette eskil={true} offset={0.6} darkness={0.6} />
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
