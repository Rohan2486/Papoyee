import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HeartShape = () => {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const x = 0, y = 0;
    s.moveTo(x, y + 0.5);
    s.bezierCurveTo(x, y + 0.5, x - 0.1, y + 0.35, x - 0.5, y + 0.35);
    s.bezierCurveTo(x - 1, y + 0.35, x - 1, y + 0.75, x - 1, y + 0.75);
    s.bezierCurveTo(x - 1, y + 1.1, x - 0.7, y + 1.4, x, y + 1.8);
    s.bezierCurveTo(x + 0.7, y + 1.4, x + 1, y + 1.1, x + 1, y + 0.75);
    s.bezierCurveTo(x + 1, y + 0.75, x + 1, y + 0.35, x + 0.5, y + 0.35);
    s.bezierCurveTo(x + 0.1, y + 0.35, x, y + 0.5, x, y + 0.5);
    return s;
  }, []);
  return shape;
};

const FloatingHeart = ({ position, speed, scale, color }: { position: [number, number, number]; speed: number; scale: number; color: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const shape = HeartShape();
  const geometry = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(shape, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3 });
    g.center();
    return g;
  }, [shape]);

  const initialY = position[1];

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * speed;
    mesh.current.position.y = initialY + Math.sin(t) * 0.8;
    mesh.current.position.x = position[0] + Math.sin(t * 0.7) * 0.3;
    mesh.current.rotation.y = t * 0.3;
    mesh.current.rotation.z = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale} geometry={geometry}>
      <meshStandardMaterial color={color} transparent opacity={0.5} roughness={0.3} metalness={0.1} />
    </mesh>
  );
};

const hearts = [
  { position: [-3, 1, -2] as [number, number, number], speed: 0.4, scale: 0.25, color: "#c084fc" },
  { position: [3.5, -0.5, -3] as [number, number, number], speed: 0.3, scale: 0.2, color: "#f0abfc" },
  { position: [-1.5, -1, -1.5] as [number, number, number], speed: 0.5, scale: 0.15, color: "#93c5fd" },
  { position: [2, 1.5, -2.5] as [number, number, number], speed: 0.35, scale: 0.18, color: "#f9a8d4" },
  { position: [0, -1.5, -4] as [number, number, number], speed: 0.45, scale: 0.3, color: "#c4b5fd" },
  { position: [-4, 0.5, -3.5] as [number, number, number], speed: 0.25, scale: 0.22, color: "#fbcfe8" },
  { position: [4.5, 0, -2] as [number, number, number], speed: 0.38, scale: 0.16, color: "#a5b4fc" },
];

const FloatingHearts3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#c084fc" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#f9a8d4" />
        {hearts.map((h, i) => (
          <FloatingHeart key={i} {...h} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingHearts3D;
