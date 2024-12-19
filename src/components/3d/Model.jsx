import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Model() {
    const gltf = useLoader(GLTFLoader, "/rubiks_cube.glb"); 
    return(
        <primitive object={gltf.scene} />
    )
}