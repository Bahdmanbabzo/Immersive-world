import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshPortalMaterial, RoundedBox } from '@react-three/drei';
import { animate } from 'motion';
import * as THREE from 'three';
import Model from './Model'; 
import Lights from "./Lights";
import { useEffect, useRef, useState } from 'react';

export default function Scene({isFullscreen}) {
    const [portalState, setPortalState] = useState();
    const portalRef = useRef();
    useEffect(() => {
        if(isFullscreen) {
        } 
    },[portalState, isFullscreen])
    // useMemo(() => extend({THREE}), []);
    return (
        <Canvas 
        className='border-green-500 border-4 h-full w-full' 
        camera={{position: [0, 0, 5]}}
        >
            <OrbitControls />
            <mesh>
                
                <planeGeometry args={[4,5]} />
                <MeshPortalMaterial 
                    ref={setPortalState}
                    side={THREE.DoubleSide} 
                    blend={ isFullscreen ? 1: 0}
                >
                    <Model />
                    <color attach={"background"} args={['#000000']}/>
                </MeshPortalMaterial>
            </mesh>
        </Canvas>
    )
}