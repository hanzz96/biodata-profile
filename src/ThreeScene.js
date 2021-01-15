import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class ThreeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  renderScene = () => {
    if (this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop  ()  {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    //Animate Models Here
    //ReDraw Scene with Camera and Scene Object
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  createGUI(controller) {
    this.gui = new GUI({name: 'My GUI'});

    if (!this.gui) {
      return;
    }
    const cameraFolder = this.gui.addFolder('Camera');
    cameraFolder.add( controller, 'x').onChange((inputX) => this.camera.position.x = inputX).listen();
    cameraFolder.add( controller , 'y').onChange((inputY) => this.camera.position.y = inputY).listen();
    cameraFolder.add(controller , 'z').onChange((inputZ) => this.camera.position.z = inputZ).listen();
    console.log(this.gui)
  }

  init() {
    // SCENE

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xcce0ff );
    this.scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );

    //camera
    this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(1542, 1202, 2057);
    this.scene.add(this.camera);

    //material
    const loader = new THREE.TextureLoader();
    const groundTexture = loader.load('assets/aerial_beach_01_ao_1k.jpg', (asd) => {
      console.log("onload", asd);
    });
    console.log(loader);
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(25, 25);
    groundTexture.anisotropy = 16;
    groundTexture.encoding = THREE.sRGBEncoding;

    const groundMaterial = new THREE.MeshBasicMaterial({ map: groundTexture });
    console.log(groundMaterial)
    //ground
    
    let mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(20000, 20000), groundMaterial);
    mesh.position.y = - 250;
    mesh.rotation.x = - Math.PI / 2;
    // mesh.receiveShadow = true;
    this.scene.add(mesh);


    let container = document.createElement('div');
    this.mount.appendChild(container);
    this.stats = new Stats();
    container.appendChild(this.stats.dom);

    //renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(this.mount.devicePixelRatio);
    this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.mount.appendChild(this.renderer.domElement);

    this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement);
    //camera controls
    let controllerGUI = {
      x : this.cameraControls.object.position.x,
      y: this.cameraControls.object.position.y,
      z : this.cameraControls.object.position.z
    }
    this.cameraControls.enableKeys = true;
    this.cameraControls.maxPolarAngle = Math.PI * 0.5;
    this.cameraControls.minDistance = 1000;
    this.cameraControls.maxDistance = 5000;
    //this listener for dev only
    // this.cameraControls.addEventListener('change', (test) => this.orbitControlsChange(test, this.gui.getRoot().__folders.Camera.__listening))
    this.cameraControls.update()
    this.createGUI(controllerGUI);

    //render scene
    this.renderScene();
  }

  orbitControlsChange(orbit, gui){
    console.log(orbit, gui);
    for(const [key, index] of gui.entries()){
      index.object = orbit.target.object.position;
    }
  }

  componentDidMount() {
    this.init();
    this.start();
  }
  render() {

    return (
      <div id="main-app" style={style.fullSize} ref={mount => { this.mount = mount }}>

      </div>
    )
  }

}
const style = {
  fullSize: {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: "0",
    top: "0",
    overflow: "hidden",
  }
}

export default ThreeScene;