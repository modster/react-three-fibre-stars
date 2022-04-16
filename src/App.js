import { Canvas } from '@react-three/fiber'
import Stars from './components/StarScene/StarScene'
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
