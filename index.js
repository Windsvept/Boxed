
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer({ canvas: test });
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width/2, height/2);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// let geometry = new THREE.BoxGeometry(5, 5, 5);
// let material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, wireframe: false} );
// let cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

var geometry = new THREE.TorusBufferGeometry( 10, 3, 16, 100 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 , wireframe: true} );
var torus = new THREE.Mesh( geometry, material );
scene.add( torus );
camera.position.z = 100;
// let light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
// light.position.set( 0, 1, 0 ); 			//default; light shining from top
// light.castShadow = true;            // default false
// scene.add( light );

let update = () => {
  // torus.rotation.x += 0.01;
  torus.rotation.y += 0.08;
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