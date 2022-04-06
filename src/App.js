import { Canvas, useFrame } from '@react-three/fiber'
// import Effects from './components/Effects/Effects'
// import Stars from './components/StarScene/StarScene'
// import Sky from './components/SkyScene/SkyScene'
// import Clouds from './components/CloudScene/CloudScene'
import Flag from './components/BackDrop'
// import GradientTexture from './components/GradientTexture'

export default function App() {
  return (
    <Canvas camera={{ fov: 80, position: [0, 0, 1] }}>
      <BackDrop />
    </Canvas>
  )
}
