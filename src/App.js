import './App.css';
import { ARButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import LoaderCus from './components/loaderCus';
import House from './components/house';
import { Environment } from '@react-three/drei';
import Ground from './components/ground';
import Straw from './components/straw';
import FallingLeaves from './components/fallingLeaves';

function App() {
    return (
        <div className="App">
            <ARButton />
            <Canvas
                camera={{ position: [25, 5, 25] }}
                style={{
                    backgroundColor: '#4C4B16'
                }}>
                <XR>
                    <pointLight position={[20, 50, 50]} intensity={2.5} color='#E55807' />
                    {/* 40513B */}
                    <Suspense fallback={<LoaderCus />}>
                        <FallingLeaves />
                        <House />
                        <Straw />
                        <Ground />
                        <Environment preset='forest' />
                    </Suspense>
                </XR>
            </Canvas>
        </div>
    );
}

export default App;
