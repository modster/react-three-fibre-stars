import { Backdrop } from '@react-three/drei'
import {MeshStandardMaterial} from 'three'
export default function BackDrop(props) {
    return (

        <Backdrop
            floor={0.25} // Stretches the floor segment, 0.25 by default
            segments={20} // Mesh-resolution, 20 by default
        >
            <meshStandardMaterial color="#353540" />
        </Backdrop>
    )
};
