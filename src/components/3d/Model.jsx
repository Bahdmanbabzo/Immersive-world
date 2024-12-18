import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

export default function Model() {
    const gltf = useLoader(GLTFLoader, "/rubiks_cube.glb"); 
    return(
        <primitive object={gltf.scene} />
    )
}