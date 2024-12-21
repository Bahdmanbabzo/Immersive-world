import {CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';


export default function Camera({isFullscreen}) {
    const { camera } = useThree();
    const cameraPosition = camera.position; 
    console.log(cameraPosition); 
    useEffect(() =>{
        console.log("the camera effect"); 
        animate(cameraPosition, {z: isFullscreen ? 5: 10, duration: 5, ease: 'easeInOut'});
    },[isFullscreen])

    return(null)
}