// @ts-nocheck

import { useEffect } from 'react';
import * as THREE from 'three';

function useCustomImageEffect(imageContainerId, imageElementId) {
  useEffect(() => {
    // Get the imageContainer and imageElement
    const imageContainer = document.getElementById(imageContainerId);
    const imageElement = document.getElementById(imageElementId);

    // Guard clause: check if elements exist
    if (!imageContainer || !imageElement) {
      return;
    }

    // Variables
    let easeFactor = 0.02;
    let scene, camera, renderer, planeMesh;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let aberrationIntensity = 0.0;
    let prevPosition = { x: 0.5, y: 0.5 };
    let animationFrameId;

    // Shaders (same as before)
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;    
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;

      void main() {
          vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);

          vec2 mouseDirection = u_mouse - u_prevMouse;

          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

          vec2 uvOffset = strength * - mouseDirection * 0.2;
          vec2 uv = vUv - uvOffset;

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

          gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `;

    function initializeScene(texture) {
      // Scene creation
      scene = new THREE.Scene();

      // Get image and container aspect ratios
      const imageAspect = texture.image.width / texture.image.height;
      const containerAspect = imageContainer.offsetWidth / imageContainer.offsetHeight;

      // Camera setup
      camera = new THREE.OrthographicCamera(-containerAspect, containerAspect, 1, -1, 0.01, 10);
      camera.position.z = 1;

      // Adjust the plane geometry
      let planeWidth, planeHeight;
      if (containerAspect > imageAspect) {
        // Container is wider than the image
        planeHeight = 2;
        planeWidth = planeHeight * imageAspect;
      } else {
        // Container is taller than the image
        planeWidth = 2 * containerAspect;
        planeHeight = planeWidth / imageAspect;
      }
      const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);

      // Uniforms
      let shaderUniforms = {
        u_mouse: { value: new THREE.Vector2() },
        u_prevMouse: { value: new THREE.Vector2() },
        u_aberrationIntensity: { value: 0.0 },
        u_texture: { value: texture }
      };

      // Creating a plane mesh with materials
      planeMesh = new THREE.Mesh(
        planeGeometry,
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
          // Add precision for better quality
          precision: 'highp'
        })
      );

      // Add mesh to scene
      scene.add(planeMesh);

      // Renderer
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(imageContainer.offsetWidth, imageContainer.offsetHeight, false);

      // Append the renderer's DOM element to imageContainer
      imageContainer.appendChild(renderer.domElement);

      // Hide the original image
      imageElement.style.display = 'none';
    }

    // Initialize scene and start animation after texture loads
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageElement.src, (texture) => {
      // Improve texture quality
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;

      initializeScene(texture);
      animateScene();
    });

    // Animation function (same as before)
    function animateScene() {
      animationFrameId = requestAnimationFrame(animateScene);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      planeMesh.material.uniforms.u_mouse.value.set(mousePosition.x, 1.0 - mousePosition.y);

      planeMesh.material.uniforms.u_prevMouse.value.set(prevPosition.x, 1.0 - prevPosition.y);

      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

      planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;

      renderer.render(scene, camera);
    }

    // Event handlers (same as before)
    function handleMouseMove(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };

      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;

      aberrationIntensity = 1;
    }

    function handleMouseEnter(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();

      mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    }

    function handleMouseLeave() {
      easeFactor = 0.05;
      targetMousePosition = { ...prevPosition };
    }

    // Add event listeners
    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
      renderer.setSize(imageContainer.offsetWidth, imageContainer.offsetHeight, false);

      // Update camera aspect
      const containerAspect = imageContainer.offsetWidth / imageContainer.offsetHeight;
      camera.left = -containerAspect;
      camera.right = containerAspect;
      camera.updateProjectionMatrix();
    }

    // Cleanup function (same as before)
    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseenter', handleMouseEnter);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', onWindowResize);

      // Cancel animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Clean up Three.js objects
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        scene.dispose();
      }
      if (planeMesh) {
        planeMesh.geometry.dispose();
        planeMesh.material.dispose();
      }

      // Remove renderer's DOM element from imageContainer
      if (renderer && renderer.domElement && imageContainer.contains(renderer.domElement)) {
        imageContainer.removeChild(renderer.domElement);
      }

      // Restore imageElement display
      if (imageElement) {
        imageElement.style.display = '';
      }
    };
  }, [imageContainerId, imageElementId]); // Dependencies
}

export default useCustomImageEffect;
