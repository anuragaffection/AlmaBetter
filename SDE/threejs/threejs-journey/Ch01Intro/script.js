import * as THREE from "three"



console.log('JavaScript is working')
console.log(THREE)



// creating a scene
// all objects will be within scene
// we have to render this scener 
const scene = new THREE.Scene();



// Mesh, is the object 
// Mesh, is the combination of shape & material 
// shape, is like geometry
// material, is how it looks 

// creating shape
const geometry = new THREE.BoxGeometry(1, 1, 1);

// creating material
const material = new THREE.MeshBasicMaterial({ color: "red" });

// creating Mesh 
const mesh = new THREE.Mesh(geometry, material)

// adding mesh to scene
scene.add(mesh)



// size of canvas 
const size = {
    width: 500,
    heigth: 600
}

// camera parameter
const cameraAngle = 75;
const aspectRatio = size.width / size.heigth;

// creating a camera 
const camera = new THREE.PerspectiveCamera(cameraAngle, aspectRatio)
camera.position.z = 3;

// adding camera to scene
scene.add(camera)



// selecting canvas
const canvas = document.querySelector(".webg1")

// using WebGLRenderer to setup renderer
const renderer = new THREE.WebGLRenderer(
    {
        canvas: canvas
    }
)

// setting size of renderer same as canvas size
renderer.setSize(size.width, size.heigth)



// final render
renderer.render(scene, camera)