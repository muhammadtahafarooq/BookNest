import React, { useEffect } from 'react';
import './Three.js1.css';

export default function ThreeJS1() {
  
  useEffect(() => {
  const container = document.getElementById('threejs-container-ANIMATION_2');
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

// Book Geometry
const bookGroup = new THREE.Group();

// Cover
const coverGeom = new THREE.BoxGeometry(2.5, 3.5, 0.1);
const coverMat = new THREE.MeshPhongMaterial({ color: 0x23372B }); // Deep Forest Archive
const frontCover = new THREE.Mesh(coverGeom, coverMat);
frontCover.position.z = 0.2;
bookGroup.add(frontCover);

const backCover = new THREE.Mesh(coverGeom, coverMat);
backCover.position.z = -0.2;
bookGroup.add(backCover);

// Spine
const spineGeom = new THREE.BoxGeometry(0.4, 3.5, 0.4);
const spine = new THREE.Mesh(spineGeom, coverMat);
spine.position.x = -1.25;
bookGroup.add(spine);

// Pages
const pageGeom = new THREE.BoxGeometry(2.4, 3.4, 0.35);
const pageMat = new THREE.MeshPhongMaterial({ color: 0xF3F0E8 }); // Aged Ivory Paper
const pages = new THREE.Mesh(pageGeom, pageMat);
pages.position.x = 0.05;
bookGroup.add(pages);

// Bookmark Ribbon (Brass)
const ribbonGeom = new THREE.BoxGeometry(0.1, 1.5, 0.02);
const ribbonMat = new THREE.MeshPhongMaterial({ color: 0xA67C42 });
const ribbon = new THREE.Mesh(ribbonGeom, ribbonMat);
ribbon.position.set(0.5, -1.5, 0.21);
bookGroup.add(ribbon);

scene.add(bookGroup);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Animation
let animationId;
    function animate() {
    animationId = requestAnimationFrame(animate);
    
    const t = Date.now() * 0.001;
    bookGroup.position.y = Math.sin(t * 0.5) * 0.2;
    bookGroup.rotation.y = Math.sin(t * 0.3) * 0.1;
    bookGroup.rotation.z = Math.cos(t * 0.2) * 0.05;
    
    renderer.render(scene, camera);
}
animate();

const handleResize = () => {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
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
    <>
      {/* STITCH_THREEJS_START:ANIMATION_2 class="fixed inset-0 w-full h-full bg-transparent" */}
<div className="fixed inset-0 w-full h-full bg-transparent" style={{display: 'block'}}>
{/* TODO manual conversion needed - inline script removed, see warnings */}
<div id="threejs-container-ANIMATION_2" style={{width: '100%', height: '100%'}}></div>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_THREEJS_END:ANIMATION_2 */}
    </>
  );
}
