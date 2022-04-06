/**
 * @module Cloud
 *
 *     @param { string } x
 *     @param { number | undefined } opacity
 *     @param { number | undefined } speed
 *     @param { number | undefined } width
 *     @param { number | undefined } depth
 *     @param { number | undefined } texture
 *     @param { number | undefined } segments
 *
 * @exports Cloud
 */
import './CloudScene.css'
import { Cloud } from '@react-three/drei'

export default function Clouds(props) {
    return (
        <Cloud
            opacity={0.3}
            speed={0.1} // Rotation speed
            width={10} // Width of the full cloud
            depth={0.6} // Z-dir depth
            segments={30} // Number of particles
        />)
};
// texture={}
