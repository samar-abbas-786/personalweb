import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import BuildGraph from "./BuildGraph";

const HeroScene = () => {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#4FD1C5" />
      <pointLight position={[-4, -3, -2]} intensity={20} color="#F2A65A" />
      <Suspense fallback={null}>
        <BuildGraph mouse={mouse} />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
