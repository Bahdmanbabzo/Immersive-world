
import { MeshPortalMaterial, Float, Stars, RandomizedLight } from '@react-three/drei';
import { damp } from 'maath/easing'
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Portal({isFullscreen, children}) {
    const portalRef = useRef();
    //smoothly animate the blend value of the portal
    useFrame(({delta})=> {
        if(isFullscreen){
            damp(portalRef.current, "blend", 1,0.1, delta)
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
            <Float
                floatIntensity={5}
                rotationIntensity={4}
                speed={2}
            >
               {children}
            </Float>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <RandomizedLight castShadow amount={2} frames={100} position={[5, 5, -10]} />

            <color attach={"background"} args={['#000000']}/>
        </MeshPortalMaterial>
    </mesh>
    )
}
