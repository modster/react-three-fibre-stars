import * as React from 'react'
import { Stars, Plane } from '@react-three/drei'
//import { Stars } from '@react-three/drei'

export default function StarScene(props) {

    return (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade  {...props}/>
    )
}


// export function Starscene() {

//     < Plane rotation - x={Math.PI / 2} args = {[100, 100, 4, 4]}>
//         <meshBasicMaterial color="black" wireframe />
//         <axesHelper />
//     </Plane>
// }
