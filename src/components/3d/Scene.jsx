import { MotionCanvas, LayoutCamera } from "framer-motion-3d";
import Model from './Model'; 

export default function Scene({isFullscreen}) {
    return (
        <MotionCanvas>
            <LayoutCamera
                initial={false}
                animate = {
                    isFullscreen ? {
                        x:10, 
                        y:5, 
                        z:10, 
                        fov:30, 
                    } : {
                        x:15, y:0.25, z:0, fov:10
                    }
                } />
            <Model />
        </MotionCanvas>
    )
}