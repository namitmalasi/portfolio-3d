import { Html } from "@react-three/drei";

function ProjectCard({ position, title, description }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#ff6b6b" />
      <Html distanceFactor={10} center>
        <div className="text-xs text-white text-center">
          <h3 className="font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </Html>
    </mesh>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "StyleStreet",
      description: "E-commerce clothing store with Stripe integration.",
      position: [-3, -2, 0],
    },
    {
      title: "Event Flow",
      description: "Event management MERN app with Stripe integration.",
      position: [0, -2, 0],
    },
  ];
  return (
    <>
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </>
  );
}
