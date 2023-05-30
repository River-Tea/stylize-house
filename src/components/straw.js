import { OrbitControls, useGLTF } from "@react-three/drei";

function Straw() {
    const straw = useGLTF("../../assets/straw.glb")
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
                object={straw.scene}
                position-x={-10}
                position-y={-1}
                position-z={35}
                // rotation-y={180}
                scale={5}
            />
        </>
     );
}

export default Straw;