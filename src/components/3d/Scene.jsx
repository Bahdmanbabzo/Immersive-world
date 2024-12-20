import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshPortalMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import Model from './Model'; 
import Lights from "./Lights";

export default function Scene({isFullscreen}) {
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