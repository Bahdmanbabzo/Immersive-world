import React, { useEffect, useRef, forwardRef } from 'react';
import { MeshPortalMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Portal = forwardRef(function Portal({ isFullscreen, children }, ref) {
    return (
        <mesh>
            <planeGeometry args={[4, 5]} />
            <MeshPortalMaterial 
                ref={ref}
                side={THREE.DoubleSide} 
                blend={isFullscreen ? 1 : 0}
            >
                <Float>
                    {children}
                </Float>
            </MeshPortalMaterial>
        </mesh>
    );
});

export default Portal;