import React, { useEffect } from 'react';
import './Three.js5.css';

export default function ThreeJS5() {
  
  useEffect(() => {
  const container = document.getElementById('threejs-container-ANIMATION_26');
  const devicePixelRatio = window.devicePixelRatio || 1;
  const width = container.clientWidth || window.innerWidth;
const height = container.clientHeight || window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xA67C42, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Group for the floating objects
const group = new THREE.Group();
scene.add(group);

// 1. Box Geometry (Representing the package)
const boxGeometry = new THREE.BoxGeometry(1.5, 0.8, 1.2);
const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xD8D4CA }); // Stone Manuscript
const packageMesh = new THREE.Mesh(boxGeometry, boxMaterial);
packageMesh.position.set(-0.5, 0, 0);
group.add(packageMesh);

// 2. Book Geometry (Representing the book inside/on top)
const bookGroup = new THREE.Group();
const coverGeometry = new THREE.BoxGeometry(1, 1.4, 0.1);
const coverMaterial = new THREE.MeshPhongMaterial({ color: 0x23372B }); // Deep Forest
const bookCover = new THREE.Mesh(coverGeometry, coverMaterial);

const pagesGeometry = new THREE.BoxGeometry(0.9, 1.35, 0.12);
const pagesMaterial = new THREE.MeshPhongMaterial({ color: 0xF3F0E8 }); // Aged Ivory
const bookPages = new THREE.Mesh(pagesGeometry, pagesMaterial);
bookPages.position.z = 0.05;

bookGroup.add(bookCover);
bookGroup.add(bookPages);
bookGroup.rotation.y = Math.PI / 4;
bookGroup.rotation.z = Math.PI / 6;
bookGroup.position.set(0.6, 0.4, 0.5);
group.add(bookGroup);

// Animation Loop
const clock = new THREE.Clock();

let animationId;
    function animate() {
    const elapsedTime = clock.getElapsedTime();
    
    // Gentle floating motion
    group.position.y = Math.sin(elapsedTime * 0.5) * 0.15;
    group.rotation.y = Math.sin(elapsedTime * 0.3) * 0.1;
    
    // Individual subtle rotations
    packageMesh.rotation.x = Math.sin(elapsedTime * 0.4) * 0.05;
    bookGroup.rotation.y += 0.005;

    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
}

animate();

// Resize Handler
const handleResize = () => {
    const newWidth = container.clientWidth || window.innerWidth;
    const newHeight = container.clientHeight || window.innerHeight;
    
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(newWidth, newHeight);
};
    window.addEventListener('resize', handleResize);
    return () => {
        if (typeof animationId !== 'undefined') cancelAnimationFrame(animationId);
        if (typeof renderer !== 'undefined') {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            if (renderer.domElement && renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        }
    };
  }, []);

return (
    <div className="Three-js5-container">
      {/* STITCH_THREEJS_START:ANIMATION_26 class="fixed inset-0 w-full h-full bg-transparent" */}
<div className="fixed inset-0 w-full h-full bg-transparent" style={{display: 'block'}}>
{/* TODO manual conversion needed - inline script removed, see warnings */}
<div id="threejs-container-ANIMATION_26" style={{width: '100%', height: '100%'}}></div>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_THREEJS_END:ANIMATION_26 */}    </div>
  );
}
