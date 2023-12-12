import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 100 );

const scene = new THREE.Scene( {color: 0x1e1e1e} );
const material = new THREE.LineBasicMaterial( { color: 0xe000ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 0, 20, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );
points.push( new THREE.Vector3( 0, -20, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 20, 0, 0 ) );
points.push( new THREE.Vector3( 0, 20, 0 ) );
points.push( new THREE.Vector3( 20, 0, 0 ) );
points.push( new THREE.Vector3( 0, -20, 0 ) );
points.push( new THREE.Vector3( -20, 0, 0 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( -20, 0, 0 ) );
points.push( new THREE.Vector3( 0, 20, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );

function animate() {
	requestAnimationFrame( animate );
    line.position.z = Math.random() * Math.random()* Math.random();
    line.position.y = Math.random() * Math.random()* Math.random();
    line.position.x = Math.random() * Math.random()* Math.random();
	renderer.render( scene, camera );
}

animate();

