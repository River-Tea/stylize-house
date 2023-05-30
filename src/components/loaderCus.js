import { Html, useProgress } from "@react-three/drei";

function LoaderCus() {
    const { progress } = useProgress();
    return <Html style={{ color: 'white' }}>
        {Math.floor(progress)}% loaded
    </Html>;
}

export default LoaderCus;