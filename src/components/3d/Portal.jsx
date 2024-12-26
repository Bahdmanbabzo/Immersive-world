
import { MeshPortalMaterial, Float } from '@react-three/drei';
import { damp } from 'maath/easing'
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Portal({isFullscreen, children}) {
    const portalRef = useRef();
    //smoothly animate the blend value of the portal
    useFrame(({delta})=> {
        if(isFullscreen){
            damp(portalRef.current, "blend", 1,0.5, delta)
        }else {
            damp(portalRef.current, "blend", 0,0.5, delta)
        }
    })
    return (
        <mesh>
        <planeGeometry args={[4,5]} />
        <MeshPortalMaterial 
            ref={portalRef}
            side={THREE.DoubleSide} 
            blend={0}
        >
            <Float>
               {children}
            </Float>
            <color attach={"background"} args={['#000000']}/>
        </MeshPortalMaterial>
    </mesh>
    )
}
