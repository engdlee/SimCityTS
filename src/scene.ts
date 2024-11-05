import * as THREE from "three";

export function createScene() {
  // initial scene setup
  const gameWindow = document.getElementById("render-target");
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x777777);

  let aspect = 1;
  if (gameWindow?.offsetWidth && gameWindow?.offsetHeight) {
    aspect = gameWindow?.offsetWidth / gameWindow?.offsetHeight;
  }

  const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(
    gameWindow?.offsetWidth ?? 100,
    gameWindow?.offsetHeight ?? 100
  );
  gameWindow?.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function draw() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  function start() {
    renderer.setAnimationLoop(draw);
  }
  function stop() {
    renderer.setAnimationLoop(null);
  }

  return {
    start,
    stop,
  };
}
