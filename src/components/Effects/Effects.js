import * as THREE from 'three'
import React, { useRef, useMemo, useEffect } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer } from 'postprocessing'
import { ShaderPass } from 'postprocessing'
import { RenderPass } from 'postprocessing'
import { UnrealBloomPass } from 'postprocessing'

extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass })

export default function Effects() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(() => new THREE.Vector2(512, 512), []) //<-------ASPECT
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[1, 0, 3, 1]} />
    </effectComposer>
  )
}
