"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";

/**
 * Signature 3D element: three translucent glass layers — Mobile / Web / Backend —
 * drift apart at rest, and gently rotate as one assembled stack.
 * This is a literal representation of "full-stack", not decorative geometry.
 */
function Layer({
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
    ref.current.rotation.y = Math.sin(t * 0.25) * 0.15 + 0.3;
    ref.current.rotation.x = Math.cos(t * 0.2) * 0.05;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={ref} position={position}>
        <RoundedBox args={[3.4, 0.28, 2.1]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.68}
            roughness={0.12}
            metalness={0.05}
            transmission={0.25}
            thickness={0.6}
            clearcoat={1}
          />
        </RoundedBox>
        {/* thin emissive edge line to suggest a circuit trace */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[3.4, 0.01, 2.1]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

export default function StackScene() {
  const layers = useMemo(
    () => [
      { position: [-0.9, 1.0, 0] as [number, number, number], color: "#0ea472", label: "Mobile" },
      { position: [0.6, 0, 0.4] as [number, number, number], color: "#5b4cf0", label: "Web" },
      { position: [-0.3, -1.0, -0.3] as [number, number, number], color: "#f43f5e", label: "Backend" },
    ],
    []
  );

  return (
    <Canvas
      camera={{ position: [3.2, 2.2, 4.6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={35} color="#f43f5e" />
      <pointLight position={[-5, -3, -4]} intensity={20} color="#0ea472" />
      <Environment preset="studio" />
      {layers.map((l, i) => (
        <Layer key={l.label} position={l.position} color={l.color} delay={i * 1.3} />
      ))}
    </Canvas>
  );
}
