import React, { useEffect, useRef, forwardRef } from 'react';
import { MeshPortalMaterial, Float, Environment } from '@react-three/drei';
import { animate } from 'motion';
import * as THREE from 'three';

export default function Portal({ isFullscreen, children }) {
    return (
        <mesh>
            <planeGeometry args={[10, 10]} />
            {/* <meshStandardMaterial color="red" /> */}
            <MeshPortalMaterial 
                // side={THREE.DoubleSide} 
                blend={isFullscreen ? 1 : 0}
            >   
                <Environment preset="night" />
                <Float>
                    {children}
                </Float>
            </MeshPortalMaterial>
        </mesh>
    )};