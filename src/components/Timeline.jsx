import { Html } from "@react-three/drei";

function Job({ position, title, company, year }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.2, 0.2, 1.5, 32]} />
      <meshStandardMaterial color="#34d399" />
      <Html position={[0, 1, 0]} distanceFactor={10} center>
        <div className="text-white text-sm text-center">
          <div className="font-bold">{title}</div>
          <div>{company}</div>
          <div className="text-xs">{year}</div>
        </div>
      </Html>
    </mesh>
  );
}

export default function Timeline() {
  const jobs = [
    {
      title: "SE Apprentice",
      company: "3Pillar Global",
      year: "2020",
      position: [-3, -4, 0],
    },
    { title: "Trainee", company: "TCS", year: "2021", position: [0, -4, 0] },
  ];
  return (
    <>
      {jobs.map((j, i) => (
        <Job key={i} {...j} />
      ))}
    </>
  );
}
