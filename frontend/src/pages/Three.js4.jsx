import React, { useEffect } from 'react';
import './Three.js4.css';

export default function ThreeJS4() {
  
  useEffect(() => {
  const container = document.getElementById('threejs-container-ANIMATION_24');
  const devicePixelRatio = window.devicePixelRatio || 1;
  
const width = container.clientWidth || window.innerWidth;
const height = container.clientHeight || window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Create a stylized "Mailbox" or "Letter" from basic geometries
const group = new THREE.Group();

// Envelope/Letter body
const bodyGeom = new THREE.BoxGeometry(2, 1.4, 0.1);
const bodyMat = new THREE.MeshPhongMaterial({ color: 0xF3F0E8 }); // Aged Ivory
const body = new THREE.Mesh(bodyGeom, bodyMat);
group.add(body);

// Brass "Seal" or Bookmark Detail
const sealGeom = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 32);
const sealMat = new THREE.MeshPhongMaterial({ color: 0xA67C42, shininess: 100 }); // Burnished Brass
const seal = new THREE.Mesh(sealGeom, sealMat);
seal.rotation.x = Math.PI / 2;
seal.position.z = 0.1;
group.add(seal);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

scene.add(group);

// Mouse interaction
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

let animationId;
    function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Gentle floating
    group.position.y = Math.sin(Date.now() * 0.002) * 0.1;
    
    // Tilt following mouse
    group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05;
    group.rotation.x += (-mouseY * 0.5 - group.rotation.x) * 0.05;
    
    renderer.render(scene, camera);
}

const handleResize = () => {
    const newWidth = container.clientWidth || window.innerWidth;
    const newHeight = container.clientHeight || window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
};
    window.addEventListener('resize', handleResize);

animate();
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
    <div className="Three-js4-container">
      {/* STITCH_THREEJS_START:ANIMATION_24 class="fixed inset-0 w-full h-full bg-transparent" */}
<div className="fixed inset-0 w-full h-full bg-transparent" style={{display: 'block'}}>
{/* TODO manual conversion needed - inline script removed, see warnings */}
<div id="threejs-container-ANIMATION_24" style={{width: '100%', height: '100%'}}></div>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_THREEJS_END:ANIMATION_24 */}    </div>
  );
}
