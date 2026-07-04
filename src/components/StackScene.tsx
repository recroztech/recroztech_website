"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment, Line } from "@react-three/drei";
import * as THREE from "three";

function OrbitRing({ radius, color, speed }: { radius: number; color: string; speed: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 10, 180]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(1800);
    const colors = new Float32Array(1800);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;

      const color = new THREE.Color();
      color.setHSL(0.54 + Math.random() * 0.16, 0.7, 0.64);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} transparent opacity={0.8} vertexColors depthWrite={false} sizeAttenuation />
    </points>
  );
}

function TechNode({
  position,
  color,
  delay,
}: {
  position: [number, number, number];
  color: string;
  delay: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() + delay;
    ref.current.rotation.y = Math.sin(t * 0.35) * 0.25;
    ref.current.position.y = position[1] + Math.sin(t * 1.4) * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.7}>
      <group ref={ref} position={position}>
        <RoundedBox args={[1.25, 1.25, 0.18]} radius={0.08} smoothness={6}>
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.75}
            roughness={0.12}
            metalness={0.08}
            transmission={0.28}
            thickness={0.65}
            clearcoat={1}
            emissive={color}
            emissiveIntensity={0.18}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.16]}>
          <boxGeometry args={[0.8, 0.8, 0.02]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, 0, -0.12]}>
          <boxGeometry args={[0.25, 0.25, 0.08]} />
          <meshBasicMaterial color={color} transparent opacity={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

export default function StackScene() {
  const nodes = useMemo(
    () => [
      { position: [-1.5, 1.1, 0] as [number, number, number], color: "#0ea472" },
      { position: [1.3, 0.2, 0.4] as [number, number, number], color: "#5b4cf0" },
      { position: [-0.3, -1.2, -0.4] as [number, number, number], color: "#f43f5e" },
    ],
    []
  );

  return (
    <Canvas camera={{ position: [3.2, 2.2, 4.8], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 2]} intensity={1.8} color="#ffffff" />
      <pointLight position={[5, 4, 4]} intensity={28} color="#f43f5e" />
      <pointLight position={[-4, -3, -4]} intensity={24} color="#0ea472" />
      <pointLight position={[0, 2, -5]} intensity={18} color="#5b4cf0" />
      <Environment preset="night" />

      <ParticleField />

      <Float speed={0.95} rotationIntensity={0.2} floatIntensity={0.6}>
        <group>
          <mesh position={[0, 0, 0]}>
            <icosahedronGeometry args={[0.95, 2]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.24}
              roughness={0.12}
              metalness={0.28}
              transmission={0.7}
              thickness={0.8}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.25, 0.02, 8, 160]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.55} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.25, 0.02, 8, 160]} />
            <meshBasicMaterial color="#7dd3fc" transparent opacity={0.45} />
          </mesh>
        </group>
      </Float>

      <Line points={[[0, 0, 0], [-1.4, 1.1, 0]]} color="#0ea472" lineWidth={1.2} />
      <Line points={[[0, 0, 0], [1.2, 0.2, 0.35]]} color="#5b4cf0" lineWidth={1.2} />
      <Line points={[[0, 0, 0], [-0.25, -1.15, -0.35]]} color="#f43f5e" lineWidth={1.2} />

      <OrbitRing radius={1.9} color="#0ea472" speed={0.16} />
      <OrbitRing radius={2.45} color="#5b4cf0" speed={-0.12} />
      <OrbitRing radius={3.05} color="#f43f5e" speed={0.09} />

      {nodes.map((node, i) => (
        <TechNode key={i} position={node.position} color={node.color} delay={i * 1.1} />
      ))}
    </Canvas>
  );
}
