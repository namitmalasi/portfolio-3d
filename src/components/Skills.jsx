import { Float, Html } from "@react-three/drei";

function Skill({ position, label }) {
  return (
    <Float speed={4.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="skyblue" />
        <Html distanceFactor={9} center>
          <div className="text-white text-sm font-bold">{label}</div>
        </Html>
      </mesh>
    </Float>
  );
}

export default function Skills() {
  const skills = [
    { label: "React", position: [-4, 2, 0] },
    { label: "Node.js", position: [0, 2, 0] },
    { label: "MongoDB", position: [4, 2, 0] },
    { label: "JavaScript", position: [-2, 0, 0] },
    { label: "CSS", position: [2, 0, 0] },
  ];
  return (
    <>
      {skills.map((s, i) => (
        <Skill key={i} {...s} />
      ))}
    </>
  );
}
