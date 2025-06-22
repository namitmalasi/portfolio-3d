import { Html } from "@react-three/drei";

export default function Contact() {
  return (
    <mesh position={[0, -6, 0]}>
      <planeGeometry args={[4, 2]} />
      <meshStandardMaterial color="#2563eb" />
      <Html distanceFactor={10} center>
        <form className="flex flex-col items-center gap-2 text-white text-sm">
          <div>Contact Me</div>
          <input className="px-2 py-1 rounded text-black" placeholder="Email" />
          <textarea
            className="px-2 py-1 rounded text-black"
            placeholder="Message"
          />
          <button className="bg-white text-black px-2 py-1 rounded">
            Send
          </button>
        </form>
      </Html>
    </mesh>
  );
}
