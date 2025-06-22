import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Overlay from "./components/Overlay";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls />
        <Experience />
      </Canvas>
      <Overlay />
    </div>
  );
}
