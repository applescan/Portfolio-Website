"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type JellyFishProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function JellyFish({ className, style }: JellyFishProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const getAspectRatio = () => canvas.offsetWidth / canvas.offsetHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
      alpha: true,
    });

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      getAspectRatio(),
      0.01,
      1000
    );
    camera.position.set(0, -2, 8);
    camera.lookAt(0, -1, 0);
    scene.add(camera);

    const fetchShader = async (path: string) =>
      fetch(path).then((res) => res.text());

    const init = async () => {
      const [vertexShader, fragmentShader, simplexNoise] = await Promise.all([
        fetchShader("/shaders/vertex.glsl"),
        fetchShader("/shaders/fragment.glsl"),
        fetchShader("/shaders/noise.glsl"),
      ]);

      const geometry = new THREE.IcosahedronGeometry(1, 32);
      const material = new THREE.ShaderMaterial({
        vertexShader: simplexNoise + vertexShader,
        fragmentShader: simplexNoise + fragmentShader,
        uniforms: {
          u_time: { value: 0.0 },
        },
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = 0.15;
      scene.add(mesh);

      const clock = new THREE.Clock();
      const loop = () => {
        const delta = clock.getDelta();
        material.uniforms.u_time.value += delta;
        renderer.render(scene, camera);
        requestAnimationFrame(loop);
      };

      const updateSize = () => {
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
        camera.aspect = getAspectRatio();
        camera.updateProjectionMatrix();
      };

      window.addEventListener("resize", updateSize);
      updateSize();
      loop();
    };

    init();

    return () => {
      window.removeEventListener("resize", () => {});
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        ...style,
      }}
    />
  );
}
