import { Canvas, useThree } from '@react-three/fiber';
import { MeshPortalMaterial, Float, CameraControls, OrbitControls} from '@react-three/drei';
import { useEffect, useRef, useState} from 'react';
import { animate } from 'motion';
import * as THREE from 'three';
import Model from './Model'; 
import Lights from "./Lights";
import Camera from './Cameras';
import Portal from './Portal';
export default function Scene({isFullscreen}) {
    // const portalRef = useRef();
    useEffect(() => {
        console.log("the scene effect");
        // console.log("this is the portal", portalRef.current); 
    }, [isFullscreen]);
    // useMemo(() => extend({THREE}), []);
    return (
        <Canvas 
            className='border-green-500 border-4 h-full w-full' 
            camera={{position: [0, -2, 10]}}
        >   
            <ambientLight intensity={0.5} />
            <Portal isFullscreen={isFullscreen}>
                <Model />
            </Portal>
          
            {/* <Camera isFullscreen={isFullscreen} model={<Model />} /> */}
            <OrbitControls />
        </Canvas>
    )
}