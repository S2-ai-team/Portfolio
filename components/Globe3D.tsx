import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { AppMode, LocationData } from '../types';

// Add type definitions for Three.js elements to avoid JSX errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      sphereGeometry: any;
      meshPhongMaterial: any;
      meshBasicMaterial: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      ringGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

interface Globe3DProps {
  mode: AppMode;
  targetLocation: LocationData | null;
}

const Earth: React.FC<{ mode: AppMode; targetLocation: LocationData | null }> = ({ mode, targetLocation }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const colorMap = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
  const specularMap = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');
  const normalMap = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');

  const targetRotation = useMemo(() => {
    if (!targetLocation) return new THREE.Euler(0, 0, 0);
    
    const latRad = targetLocation.lat * (Math.PI / 180);
    const lngRad = targetLocation.lng * (Math.PI / 180);
    
    const targetY = -lngRad - Math.PI / 2;
    const targetX = latRad; 

    return new THREE.Euler(targetX, targetY, 0);
  }, [targetLocation]);

  useFrame((state) => {
    if (groupRef.current) {
      if (mode === AppMode.IDLE || !targetLocation) {
        groupRef.current.rotation.y += 0.0005;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.05);
      } else {
        const currentQ = groupRef.current.quaternion;
        const targetQ = new THREE.Quaternion().setFromEuler(targetRotation);
        currentQ.slerp(targetQ, 0.05);
      }
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          specularMap={specularMap}
          normalMap={normalMap}
          specular={new THREE.Color('grey')}
          shininess={5}
        />
      </mesh>
      
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial 
          color="#4fa1c4" 
          transparent 
          opacity={0.1} 
          side={THREE.BackSide} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {targetLocation && mode !== AppMode.IDLE && (
         <LocationMarker location={targetLocation} />
      )}
    </group>
  );
};

const LocationMarker: React.FC<{ location: LocationData }> = ({ location }) => {
    const pos = useMemo(() => {
        const r = 1.51;
        const phi = (90 - location.lat) * (Math.PI / 180);
        const theta = (location.lng + 180) * (Math.PI / 180);
        
        const x = -(r * Math.sin(phi) * Math.cos(theta));
        const z = r * Math.sin(phi) * Math.sin(theta);
        const y = r * Math.cos(phi);
        
        return new THREE.Vector3(x, y, z);
    }, [location]);

    return (
        <group position={pos}>
            <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.02, 0.005, 0.2, 8]} />
                <meshBasicMaterial color="#ef4444" />
            </mesh>
            <mesh position={[0, 0.2, 0]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
                 <ringGeometry args={[0.08, 0.1, 32]} />
                 <meshBasicMaterial color="#ef4444" transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

const Globe3D: React.FC<Globe3DProps> = ({ mode, targetLocation }) => {
  return (
    <div className="absolute inset-0 z-0 bg-slate-900">
      {/* 
         Camera Position: 
         x: -2.5 shifts the viewpoint to the left, which makes the Globe (at 0,0,0) appear on the RIGHT side of the screen.
         This creates space on the left for text.
      */}
      <Canvas camera={{ position: [-2.5, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[20, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
        
        <React.Suspense fallback={null}>
            <Earth mode={mode} targetLocation={targetLocation} />
        </React.Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={mode === AppMode.IDLE}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Globe3D;