import {CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';


export default function Camera({isFullscreen,model}) {
    // const { scene } = useThree();
    // console.log(scene.getObjectByName('model'));
    const cameraRef = useRef(); 
    useEffect(() => {
        if(isFullscreen){
            const targetPosition = new THREE.Vector3(0,0,0); 
            // model.getWorldPosition(targetPosition); 
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
                10,
                0,
                0,
                0,
                true
            )
        }
    }, [isFullscreen])
    return (
        <CameraControls ref={cameraRef} />
    );
};