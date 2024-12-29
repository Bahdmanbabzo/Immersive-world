import { useTransform } from "motion/react";

export default function Camera () {
    const blendValue = useTransform(camera.position.z, [0,-10],[0,1]); 
    
}