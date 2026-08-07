import React, { useEffect } from 'react';
import './Three.js2.css';

export default function ThreeJS2() {
  
  useEffect(() => {
  const container = document.getElementById('threejs-container-ANIMATION_8');
  const devicePixelRatio = window.devicePixelRatio || 1;
  (function() {
  const container = document.getElementById('threejs-container-ANIMATION_3');
  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Book Group for rotation
  const bookGroup = new THREE.Group();

  // Materials
  const coverMat = new THREE.MeshPhongMaterial({ color: 0x23372B, shininess: 30 }); // Deep Forest
  const paperMat = new THREE.MeshPhongMaterial({ color: 0xF3F0E8 }); // Aged Ivory

  // Geometry
  const coverGeom = new THREE.BoxGeometry(2.8, 4, 0.12);
  const pageGeom = new THREE.BoxGeometry(2.7, 3.9, 0.4);
  const spineGeom = new THREE.BoxGeometry(0.5, 4, 0.5);

  // Front Cover
  const frontCover = new THREE.Mesh(coverGeom, coverMat);
  frontCover.position.z = 0.25;
  bookGroup.add(frontCover);

  // Back Cover
  const backCover = new THREE.Mesh(coverGeom, coverMat);
  backCover.position.z = -0.25;
  bookGroup.add(backCover);

  // Spine
  const spine = new THREE.Mesh(spineGeom, coverMat);
  spine.position.x = -1.4;
  bookGroup.add(spine);

  // Pages
  const pages = new THREE.Mesh(pageGeom, paperMat);
  pages.position.x = 0.05;
  bookGroup.add(pages);

  // Ribbon
  const ribbonGeom = new THREE.BoxGeometry(0.12, 1.8, 0.03);
  const ribbonMat = new THREE.MeshPhongMaterial({ color: 0xA67C42 }); // Brass
  const ribbon = new THREE.Mesh(ribbonGeom, ribbonMat);
  ribbon.position.set(0.6, -2.1, 0.26);
  bookGroup.add(ribbon);

  scene.add(bookGroup);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, 0.8);
  spotLight.position.set(10, 10, 10);
  scene.add(spotLight);

  // Mouse Interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;

  window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) - 0.5;
    mouseY = (event.clientY / window.innerHeight) - 0.5;
  });

  let animationId;
    function animate() {
    animationId = requestAnimationFrame(animate);

    // Subtle floating rotation
    const time = Date.now() * 0.001;
    
    // Lerp rotation based on mouse
    targetRotationY = mouseX * 0.5;
    targetRotationX = mouseY * 0.3;

    bookGroup.rotation.y += (targetRotationY - bookGroup.rotation.y) * 0.05;
    bookGroup.rotation.x += (targetRotationX - bookGroup.rotation.x) * 0.05;
    
    // Ambient float
    bookGroup.position.y = Math.sin(time * 0.5) * 0.1;

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
})();
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
      {/* STITCH_THREEJS_START:ANIMATION_8 class="fixed inset-0 w-full h-full bg-transparent" */}
<div className="fixed inset-0 w-full h-full bg-transparent" style={{display: 'block'}}>
{/* TODO manual conversion needed - inline script removed, see warnings */}
<div id="threejs-container-ANIMATION_8" style={{width: '100%', height: '100%'}}></div>
{/* TODO manual conversion needed - inline script removed, see warnings */}
</div>
{/* STITCH_THREEJS_END:ANIMATION_8 */}
    </>
  );
}
