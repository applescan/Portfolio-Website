"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type JellyFishProps = {
	className?: string;
	style?: React.CSSProperties;
};

export default function JellyFishSmall({ className, style }: JellyFishProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const getAspectRatio = () => canvas.clientWidth / canvas.clientHeight;

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
			1000,
		);
		camera.position.set(0, 3, 8);
		camera.lookAt(0, 0, 0);
		scene.add(camera);

		new OrbitControls(camera, canvas);

		const geometry = new THREE.OctahedronGeometry(1, 32);
		geometry.rotateX(-Math.PI * 0.5);

		Promise.all([
			fetch("/shaders/simplexNoise4D.glsl").then((res) => res.text()),
			fetch("/shaders/vertexSmall.glsl").then((res) => res.text()),
			fetch("/shaders/fragmentSmall.glsl").then((res) => res.text()),
		]).then(([noise, vertex, fragment]) => {
			const material = new THREE.ShaderMaterial({
				vertexShader: noise + vertex,
				fragmentShader: noise + fragment,
				uniforms: {
					u_time: { value: 0.0 },
					u_width: { value: 1.3 },
					u_bump_frequency: { value: 0.3 },
					u_bump_scale: { value: 0.4 },
				},
			});

			const mesh = new THREE.Mesh(geometry, material);
			mesh.position.y = 0.15;
			scene.add(mesh);

			const clock = new THREE.Clock();
			clock.start();

			const renderLoop = () => {
				const delta = clock.getDelta();
				material.uniforms.u_time.value += delta;
				renderer.render(scene, camera);
				requestAnimationFrame(renderLoop);
			};

			const resize = () => {
				renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
				camera.aspect = getAspectRatio();
				camera.updateProjectionMatrix();
			};

			window.addEventListener("resize", resize);
			resize();
			renderLoop();
		});

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
