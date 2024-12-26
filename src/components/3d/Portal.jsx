<<<<<<< HEAD
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
=======
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
>>>>>>> parent of ee2a7ea (Pass ref to be accessed in scene.)
