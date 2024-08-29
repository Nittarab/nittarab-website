'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Line } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'

const MovingShape = ({ position, color, shape: ShapeComponent, args, distort, isCollapsing }) => {
  const meshRef = useRef()
  const [offset] = useState(() => Math.random() * 2 * Math.PI)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      const targetPosition = isCollapsing ? [0, 0, 0] : position
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosition[0], 0.05)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPosition[1], 0.05)
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetPosition[2], 0.05)
      meshRef.current.rotation.x = Math.sin(time * 0.5 + offset) * 0.3
      meshRef.current.rotation.y = Math.cos(time * 0.5 + offset) * 0.3
    }
  })

  return (
    <ShapeComponent ref={meshRef} args={args}>
      <MeshDistortMaterial color={color} speed={2} distort={distort} />
    </ShapeComponent>
  )
}

const Arc = ({ position, color, isCollapsing }) => {
  const meshRef = useRef()
  const curve = useMemo(() => new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(1, 0, 0)
  ), [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      const targetPosition = isCollapsing ? [0, 0, 0] : position
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosition[0], 0.05)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPosition[1], 0.05)
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetPosition[2], 0.05)
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.3
    }
  })

  return (
    <group ref={meshRef}>
      <Line points={curve.getPoints(50)} color={color} lineWidth={3} />
    </group>
  )
}

const Lightning = ({ position, color, isCollapsing }) => {
  const meshRef = useRef()
  const [points, setPoints] = useState(() => generateLightningPoints())

  function generateLightningPoints() {
    const points = []
    let y = 1
    while (y > -1) {
      points.push(new THREE.Vector3(Math.random() * 0.4 - 0.2, y, 0))
      y -= Math.random() * 0.2
    }
    return points
  }

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      const targetPosition = isCollapsing ? [0, 0, 0] : position
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosition[0], 0.05)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPosition[1], 0.05)
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetPosition[2], 0.05)
      if (Math.sin(time * 2) > 0.9) {
        setPoints(generateLightningPoints())
      }
    }
  })

  return (
    <group ref={meshRef}>
      <Line points={points} color={color} lineWidth={3} />
    </group>
  )
}

const ThreeJSScene = ({ isCollapsing }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <MovingShape position={[-5, 5, 0]} color="#8352FD" shape={Sphere} args={[1, 100, 200]} distort={0.3} isCollapsing={isCollapsing} />
      <Arc position={[5, 5, 0]} color="#FF6B6B" isCollapsing={isCollapsing} />
      <Lightning position={[-5, -5, 0]} color="#4ECDC4" isCollapsing={isCollapsing} />
      <MovingShape position={[5, -5, 0]} color="#FFD93D" shape={Sphere} args={[0.8, 100, 200]} distort={0.3} isCollapsing={isCollapsing} />
    </Canvas>
  )
}

export default ThreeJSScene