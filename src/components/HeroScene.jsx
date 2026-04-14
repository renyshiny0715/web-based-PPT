import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const HeroScene = () => {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const runningRef = useRef(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#040814", 4, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const ambient = new THREE.AmbientLight("#a9ceff", 0.8);
    scene.add(ambient);

    const key = new THREE.DirectionalLight("#8a7dff", 1.7);
    key.position.set(2.8, 2.4, 3.8);
    scene.add(key);

    const rim = new THREE.PointLight("#58d9ff", 1.5, 12);
    rim.position.set(-2.2, -1.4, 2.5);
    scene.add(rim);

    const geometry = new THREE.IcosahedronGeometry(1.1, 2);
    const material = new THREE.MeshPhysicalMaterial({
      color: "#8b7dff",
      metalness: 0.35,
      roughness: 0.15,
      transmission: 0.22,
      thickness: 1.3,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      emissive: "#161b39",
      emissiveIntensity: 0.8
    });
    const coreMesh = new THREE.Mesh(geometry, material);
    scene.add(coreMesh);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.03, 16, 160),
      new THREE.MeshBasicMaterial({ color: "#56ccf2", transparent: true, opacity: 0.5 })
    );
    ring.rotation.x = Math.PI / 2.6;
    scene.add(ring);

    const particleCount = 170;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPosition = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 1) {
      particlesPosition[i] = (Math.random() - 0.5) * 8;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlesPosition, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ color: "#8ecfff", size: 0.015, transparent: true, opacity: 0.8 })
    );
    scene.add(particles);

    const mouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current = { x, y };
    };
    window.addEventListener("pointermove", mouseMove, { passive: true });

    const animate = () => {
      if (!runningRef.current) {
        rafId = window.requestAnimationFrame(animate);
        return;
      }

      const { x, y } = mouseRef.current;
      coreMesh.rotation.y += 0.004;
      coreMesh.rotation.x += 0.002;
      ring.rotation.z += 0.003;
      particles.rotation.y += 0.0009;

      coreMesh.rotation.y += x * 0.002;
      coreMesh.rotation.x += y * 0.0015;

      camera.position.x += (x * 0.35 - camera.position.x) * 0.035;
      camera.position.y += (-y * 0.2 - camera.position.y) * 0.035;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };

    let rafId = window.requestAnimationFrame(animate);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        runningRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    visibilityObserver.observe(mount);

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    gsap.to(camera.position, {
      z: 3.8,
      y: 0.24,
      duration: 2.2,
      ease: "power2.out"
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", mouseMove);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
};

export default HeroScene;
