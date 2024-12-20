import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; 
import Lights from "./Lights";

export default function Scene({isFullscreen}) {
    // useMemo(() => extend({THREE}), []);
    return (
        <Canvas>
            {/* <AmbientLight intensity={0.5} /> */}
            <ambientLight intensity={0.2} />
            {/* <LayoutCamera
                initial={false}
                animate = {
                    isFullscreen ? {
                        x:10, 
                        y:5, 
                        z:10, 
                        fov:30, 
                    } : {
                        x:15, y:0.25, z:0, fov:10
                    }
                } /> */}
            {/* <Lights isFullscreen={isFullscreen} /> */}
            <Model />   
            <color attach="background" args={['#000000']} />
            <OrbitControls />
        </Canvas>
    )
}