import React, { useEffect } from 'react';
import './Three.js3.css';

export default function ThreeJS3() {
  
  useEffect(() => {
  const container = document.getElementById('threejs-container-ANIMATION_24');
  const devicePixelRatio = window.devicePixelRatio || 1;
  
const width = container.clientWidth || window.innerWidth;
const height = container.clientHeight || window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xa67c42, 1.2); // Brass-tinted light
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Group to hold the library elements
const libraryGroup = new THREE.Group();
scene.add(libraryGroup);

// Function to create a book
function createBook(color, x, y, z, rotationY) {
    const geometry = new THREE.BoxGeometry(0.8, 1.2, 0.15);
    const material = new THREE.MeshPhongMaterial({ color: color });
    const book = new THREE.Mesh(geometry, material);
    
    // Spine detail (lighter color)
    const spineGeo = new THREE.BoxGeometry(0.05, 1.2, 0.16);
    const spineMat = new THREE.MeshPhongMaterial({ color: 0xd8d4ca });
    const spine = new THREE.Mesh(spineGeo, spineMat);
    spine.position.x = -0.4;
    book.add(spine);

    // Bookmark ribbon
    const ribbonGeo = new THREE.BoxGeometry(0.05, 0.4, 0.01);
    const ribbonMat = new THREE.MeshPhongMaterial({ color: 0xa67c42 });
    const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbon.position.set(0.1, 0.5, 0.08);
    book.add(ribbon);

    book.position.set(x, y, z);
    book.rotation.y = rotationY;
    return book;
}

// Add several books to the scene
const colors = [0x23372b, 0x171a1c, 0x3d4b41, 0x5a4632];
for (let i = 0; i < 6; i++) {
    const book = createBook(
        colors[i % colors.length],
        (i - 2.5) * 1.1,
        0,
        0,
        Math.sin(i) * 0.2
    );
    libraryGroup.add(book);
}

// Shelf
const shelfGeo = new THREE.BoxGeometry(8, 0.1, 1.5);
const shelfMat = new THREE.MeshPhongMaterial({ color: 0x3d2b1f });
const shelf = new THREE.Mesh(shelfGeo, shelfMat);
shelf.position.y = -0.65;
libraryGroup.add(shelf);

camera.position.z = 5;

// Mouse movement effect
let mouseX = 0;
let mouseY = 0;
window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

let animationId;
    function animate() {
    animationId = requestAnimationFrame(animate);
    
    libraryGroup.rotation.y += (mouseX * 0.2 - libraryGroup.rotation.y) * 0.05;
    libraryGroup.rotation.x += (-mouseY * 0.1 - libraryGroup.rotation.x) * 0.05;
    
    renderer.render(scene, camera);
}

const handleResize = () => {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
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
    <div className="Three-js3-container">
      {/* STITCH_THREEJS_START:ANIMATION_24 class="fixed inset-0 w-full h-full bg-transparent" */}
<div className="fixed inset-0 w-full h-full bg-transparent" style={{display: 'block'}}>
{/* TODO manual conversion needed - inline script removed, see warnings */}
<div id="threejs-container-ANIMATION_24" style={{width: '100%', height: '100%'}}></div>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_THREEJS_END:ANIMATION_24 */}    </div>
  );
}
