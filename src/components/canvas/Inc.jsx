// src/components/canvas.jsx
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CanvasLoader from "../loader";


// -------------- EARTH MODEL (INC CUBE) -----------------
function Earth({ onLoaded }) {
  const { scene } = useGLTF("/inc4.gltf"); // ensure file is in /public

  useEffect(() => {
    if (onLoaded) onLoaded(); // notify Intro.jsx when model loads
  }, []);

  return (
    <group>
      {/* Lights */}
      <hemisphereLight intensity={2.7} color="white" groundColor="black" />
      <spotLight
        position={[0, 60, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={1600}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <pointLight position={[0, -40, 0]} intensity={900} color="white" castShadow />

      {/* Model */}
      <primitive
        object={scene}
        scale={1.5}
        position={[0, 0.1, 0]}
        rotation-x={Math.PI / 4}
        rotation-y={1}
        rotation-z={0.4}
      />

      {/* Bloom */}
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={1.3} luminanceSmoothing={1.0} />
      </EffectComposer>
    </group>
  );
}


// ------------------- CANVAS WRAPPER ---------------------

export default function IncCanvas({ onLoaded }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth onLoaded={onLoaded} />
      </Suspense>
    </Canvas>
  );
}

// Preload GLTF so it loads instantly
useGLTF.preload("/inc4.gltf");
  