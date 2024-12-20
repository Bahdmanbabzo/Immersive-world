import {CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';


export default function Camera({isFullscreen, model}) {
    const { scene } = useThree();
    const cameraRef = useRef(); 
    useEffect(() => {
        if(isFullscreen){
            const targetPosition = THREE.vector3(); 
            model.getWorldPosition(targetPosition);
            cameraRef.current.setLookAt(
                0,
                0,
                5,
                targetPosition.x,
                targetPosition.y,
                targetPosition.z,
                true
            )
        }else {
            cameraRef.current.setLookAt(
                0,
                0,
                5,
                0,
                0,
                0,
                true
            )
        }
    })
    return (
        <CameraControls ref={cameraRef} />
    );
};