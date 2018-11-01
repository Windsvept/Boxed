
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer({ canvas: test });
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(5, 5, 5);
let material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, wireframe: false} );
let cube = new THREE.Mesh(geometry, material);
let light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 0, 1, 0 ); 			//default; light shining from top
light.castShadow = true;            // default false
scene.add( light );
scene.add(cube);
camera.position.z = 15;

let update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.05;
};

let render = () => {
  renderer.render(scene, camera);
}

let GameLoop = () => {
  requestAnimationFrame(GameLoop);
  update();
  render();
};

GameLoop();