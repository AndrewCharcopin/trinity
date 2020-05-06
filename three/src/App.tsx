import React, { createRef, useState } from 'react';
import * as THREE from "three";
import { Canvas, useFrame } from 'react-three-fiber';
import emotionReset from 'emotion-reset';
import 'App.scss';

class App extends React.Component {
  componentDidMount() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 10000);
    camera.position.set(0, 0, 1000);

    const geometry = new THREE.BoxGeometry(250, 250, 250);
    const material = new THREE.MeshPhongMaterial({color: 0xff0000});
    const box      = new THREE.Mesh(geometry, material);
    box.position.z = -5;
    scene.add(box);

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);

    const tick = (): void => {
      requestAnimationFrame(tick);
      box.rotation.x += 0.01;
      box.rotation.y += 0.05;
      renderer.render(scene, camera);
    };
    tick();
    console.log('Hello Three.js');
  }
  render() {
    return (
      <div className="App">
        <Canvas>
        </Canvas>
      </div>
    )
  }
}
export default App;
