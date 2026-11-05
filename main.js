import * as THREE from 'three';
import styles from './style.css';
const scene = new THREE.Scene();
const background = new THREE.Color(0x000000); // Set background color to black
scene.background = background;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
}); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
renderer.setAnimationLoop( animate );

renderer.render(scene, camera);


// Create a green cube
const geometry = new THREE.BoxGeometry(3, 3, 3);
const donut_geo = new THREE.TorusGeometry(10, 3, 16, 100);
const donut_tex = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const donut = new THREE.Mesh(donut_geo, donut_tex);
const geometry2 = new THREE.ConeGeometry(2, 4, 3);
const triangle_tex = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const triangle = new THREE.Mesh(geometry2, triangle_tex);
const texture = new THREE.TextureLoader().load('dog.webp');
const material = new THREE.MeshBasicMaterial({
  map:texture,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(donut);
scene.add(triangle);

camera.position.z = 45;

function moveCamera() { 
    const t=document.body.getBoundingClientRect().top;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    triangle.rotation.x += 0.01;
    triangle.rotation.y += 0.01;

    camera.position.z = t*-0.01 
    camera.position.x=t*-0.000 
    camera.rotation.y=t*-0.000
}

document.body.onscroll = moveCamera;
moveCamera(); 

function animate() {
  donut.rotation.x += 0.01;
  donut.rotation.y += 0.01;

  renderer.render(scene, camera);
}

