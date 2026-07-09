import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

// Node positions laid out like a small dependency graph — not decorative
// randomness, but a stand-in for "services" in a build pipeline.
const NODES = [
  { pos: [0, 1.4, 0], label: "api", color: "#4FD1C5", size: 0.26 },
  { pos: [-1.6, 0.4, 0.6], label: "db", color: "#F2A65A", size: 0.22 },
  { pos: [1.7, 0.5, -0.4], label: "ui", color: "#4FD1C5", size: 0.22 },
  { pos: [-1.1, -1.1, -0.6], label: "auth", color: "#F2A65A", size: 0.18 },
  { pos: [1.1, -1.3, 0.4], label: "ai", color: "#4FD1C5", size: 0.2 },
  { pos: [0, -0.2, 1.2], label: "core", color: "#E7E9F0", size: 0.3 },
];

const EDGES = [
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [0, 2],
  [1, 3],
];

const Node = ({ pos, color, size }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.material.emissiveIntensity =
        0.6 + Math.sin(t * 1.5 + pos[0]) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
};

const Edges = () => {
  const lines = useMemo(
    () =>
      EDGES.map(([a, b]) => [
        new THREE.Vector3(...NODES[a].pos),
        new THREE.Vector3(...NODES[b].pos),
      ]),
    []
  );
  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#2E6B65"
          lineWidth={1}
          transparent
          opacity={0.55}
        />
      ))}
    </>
  );
};

const BuildGraph = ({ mouse }) => {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.08 + mouse.current.x * 0.4;
      group.current.rotation.x = mouse.current.y * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Edges />
      {NODES.map((n, i) => (
        <Float key={i} speed={1.4} rotationIntensity={0} floatIntensity={1.1}>
          <Node {...n} />
        </Float>
      ))}
    </group>
  );
};

export default BuildGraph;
