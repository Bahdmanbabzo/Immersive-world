import { Canvas } from '@react-three/fiber';
import { MeshPortalMaterial, Float, CameraControls} from '@react-three/drei';
import { animate } from 'motion';
import * as THREE from 'three';
import Model from './Model'; 
import Lights from "./Lights";
import Camera from './Cameras';
import { useEffect, useRef, useState } from 'react';

export default function Scene({isFullscreen}) {
    // useMemo(() => extend({THREE}), []);
    return (
        <Canvas 
        className='border-green-500 border-4 h-full w-full' 
        camera={{position: [0, -2, 10]}}
        >
            <mesh>
                <planeGeometry args={[4,5]} />
                <MeshPortalMaterial 
                    side={THREE.DoubleSide} 
                    blend={ isFullscreen ? 1: 0}
                >
                    <Float>
                        <Model/>
                    </Float>
                    <color attach={"background"} args={['#000000']}/>
                </MeshPortalMaterial>
            </mesh>
            <Camera isFullscreen={isFullscreen} model={<Model />} />
        </Canvas>
    )
}