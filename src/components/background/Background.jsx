import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float time;
  uniform float scrollY;

  float gridLine(float coord) {
    float thickness = 0.005;
    return smoothstep(thickness, 0.0, abs(fract(coord * 5.0) - 0.5));
  }

  void main() {
    float xLines = gridLine(vUv.x + time * 0.1);
    float yLines = gridLine(vUv.y + scrollY*1.5);

    vec3 color = vec3(0.635, 0.349, 1.0) * max(xLines, yLines); // #a259ff
    color *= 0.5 + 0.5 * sin(time * 3.0);

    gl_FragColor = vec4(color, 1.0);
  }
`

function DynamicBackground({ scrollY }) {
  const materialRef = useRef()
  const planeRef = useRef()
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    scrollY: { value: 0 },
  }), [])

  const { viewport } = useThree()

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (materialRef.current) {
      uniforms.time.value = elapsed * 0.1
      uniforms.scrollY.value = scrollY.current * 0.00025
      materialRef.current.uniforms.time.value = uniforms.time.value
      materialRef.current.uniforms.scrollY.value = uniforms.scrollY.value
    }

    // Escalar el plano para cubrir el viewport real
    if (planeRef.current) {
      planeRef.current.scale.set(viewport.width, viewport.height, 1)
    }
  })

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function Background() {
  const scrollY = useRef(0)

  useEffect(() => {
    function onScroll() {
      scrollY.current = window.scrollY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 1], fov: 75 }}
    >
      <DynamicBackground scrollY={scrollY} />
    </Canvas>
  )
}
