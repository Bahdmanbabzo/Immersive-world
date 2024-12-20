import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshPortalMaterial, RoundedBox } from '@react-three/drei';
import Model from './Model'; 
import Lights from "./Lights";

export default function Scene({isFullscreen}) {
    // useMemo(() => extend({THREE}), []);
    return (
        <Canvas className='border-green-500 border-4'><OrbitControls />
            <color attach={"background"} args={['#000000']}/>
            <mesh>
                <planeGeometry />
                <MeshPortalMaterial>
                    <Model />
                </MeshPortalMaterial>
            </mesh>
        </Canvas>
    )
}