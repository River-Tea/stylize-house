import { OrbitControls, useGLTF } from "@react-three/drei";

function FallingLeaves() {
    const fallingLeaves = useGLTF("../../assets/falling_leaves.glb")
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
            object={fallingLeaves.scene}
            position-x={-50}
            position-y={20}
            position-z={-10}
            rotation-x={90}
            scale={0.1}
            />
        </>
    );
}

export default FallingLeaves;