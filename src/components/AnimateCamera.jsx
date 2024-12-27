import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { animate } from "motion/react";
import { useEffect, useRef } from "react";

export default function AnimateCamera({isFullscreen}){
    const cameraRef = useRef();
    const { camera } = useThree(); 
    if(isFullscreen) {
        animate(camera.position, {z:5}, {duration: 1})
    } else {
        animate(camera.position, {z:3}, {duration:1})
    }
    return (null); 
}