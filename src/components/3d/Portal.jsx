import { MeshPortalMaterial, Float } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import * as THREE from 'three';

export default function Portal({isFullscreen, children}) {
    const portalRef = useRef();
    return (
        <mesh>
        <planeGeometry args={[4,5]} />
        <MeshPortalMaterial 
            ref={portalRef}
            side={THREE.DoubleSide} 
            blend={ isFullscreen ? 1: 0}
        >
            <Float>
               {children}
            </Float>
            <color attach={"background"} args={['#000000']}/>
        </MeshPortalMaterial>
    </mesh>
    )
}