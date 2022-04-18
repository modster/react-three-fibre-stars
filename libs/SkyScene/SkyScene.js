/**
 * @module SkyScene
 * @imports Sky from @react-three/drei
 * @exports <CustomSky> CustomSky
 */
 import * as React from 'react'
 import { useFrame } from '@react-three/fiber'
 import { Sky } from '@react-three/drei'

/**
 * @function CustomSky
 * @param {*} props
 * @returns {<frag>} Sky
 */
export default function CustomSky(props) {
    const x = useFrame(() => Math.PI / 2)
    return (
        <>
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={10} azimuth={0.75} {...props} />
        </ >

    )

};

/**
 * @example https://threejs.org/examples/#webgl_shaders_sky
//  */
// <>
// 68      <Sky
// 69        distance={3000}
// 70        turbidity={number('Turbidity', 8, { range: true, max: 10, step: 0.1 })}
// 71        rayleigh={number('Rayleigh', 6, { range: true, max: 10, step: 0.1 })}
// 72        mieCoefficient={number('mieCoefficient', 0.005, { range: true, max: 0.1, step: 0.001 })}
// 73        mieDirectionalG={number('mieDirectionalG', 0.8, { range: true, max: 1, step: 0.01 })}
// 74        inclination={inclination}
// 75        azimuth={number('Azimuth', 0.25, { range: true, max: 1, step: 0.01 })}
// 76      />
// 77      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]}>
// 78        <meshBasicMaterial color="black" wireframe />
// 79      </Plane>
// 80      <axesHelper />
// 81    </>
