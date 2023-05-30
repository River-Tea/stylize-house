import { OrbitControls, useGLTF } from "@react-three/drei";

function House() {
    const house = useGLTF("../../assets/StylizeHouse_Korean.glb")
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
                object={house.scene}
                position-x={-30}
                position-y={-6}
                position-z={-5}
                scale={0.9}
            />
        </>
    );
}

export default House;