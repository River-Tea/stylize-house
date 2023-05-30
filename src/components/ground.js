import { OrbitControls, useGLTF } from "@react-three/drei";

function Ground() {
    const ground = useGLTF("../../assets/ground.glb")
    return (
        <>
            <OrbitControls 
                autoRotate={false}
                minAzimuthAngle={Infinity}
                maxAzimuthAngle={Infinity}
                minPolarAngle={0}
                maxPolarAngle={Math.PI - Math.PI / 2}
                maxDistance={70}
                maxZoom={40}
            />
            <primitive 
                object={ground.scene}
                position-x={0}
                position-y={-3}
                position-z={15}
                // rotation-y={180}
                scale={1.5}
            />
        </>
    );
}

export default Ground;