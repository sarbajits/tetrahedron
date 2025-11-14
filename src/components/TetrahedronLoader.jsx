import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// A component to render the animated tetrahedron
function AnimatedTetrahedron() {
    const meshRef = useRef();

    // Animate the rotation of the tetrahedron
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} scale={1}>
            {/* Define the geometry as a tetrahedron (TetrahedronGeometry) */}
            <tetrahedronGeometry args={[1, 0]} />
            {/* Define the material with a specific color */}
            <meshStandardMaterial color="#4f38f9" metalness={0.1} roughness={0.1} />
        </mesh>
    );
}

// The main Loader component wrapper
export default function TetrahedronLoader() {
    return (
        <div style={{ width: '200px', height: '200px' }}>
            <Canvas>
                {/* Add ambient light for general scene illumination */}
                <ambientLight intensity={1.25} />
                {/* Optional: Add environment lighting presets for better visuals */}
                <Environment preset="sunset" />
                <AnimatedTetrahedron />
                {/* Optional: OrbitControls allows users to interactively rotate the view */}
                <OrbitControls enableDamping dampingFactor={0.25} enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}