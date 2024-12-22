import { Canvas } from '@react-three/fiber';
import { MeshPortalMaterial, Float, CameraControls} from '@react-three/drei';
import { useEffect, useRef} from 'react';
import { animate } from 'motion';
import * as THREE from 'three';
import Model from './Model'; 
import Lights from "./Lights";
import Camera from './Cameras';
import Portal from './Portal';
export default function Scene({isFullscreen}) {
    const portalRef = useRef();
    const cameraRef = useRef();
    useEffect(() => {
        console.log("the scene effect");
        console.log("this is the portal", portalRef.current); 
        console.log("this is the camera", cameraRef.current);
    }, [isFullscreen]);
    // useMemo(() => extend({THREE}), []);
    return (
        <Canvas 
        className='border-green-500 border-4 h-full w-full' 
        // camera={{position: [0, -2, 10]}}
        >
            <Portal ref={portalRef} isFullscreen={isFullscreen}>
                <Model />
             </Portal>
            <Camera isFullscreen={isFullscreen} model={<Model />} />
        </Canvas>
    )
}