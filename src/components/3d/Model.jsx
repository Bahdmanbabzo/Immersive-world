import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Model() {
    const gltf = useLoader(GLTFLoader, "/rubiks_cube.glb"); 
    console.log(gltf.scene)
    return(
        <primitive object={gltf.scene} name="model" />
    )
}