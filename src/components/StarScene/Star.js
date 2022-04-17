import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Star(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  //const url = '../public/bj1wx8.png'
  //const tex = useTexture("../public/bj1wx8.png")

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 1500
    ref.current.rotation.y += delta / 1500
  })

  return (
    <group rotation={[0, 0, Math.PI / 10]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.003} sizeAttenuation={true} depthWrite={true} />
      </Points>
    </group>
  )
}
