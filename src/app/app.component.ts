import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import * as THREE from 'three'
import { StlModelViewerModule } from 'angular-stl-model-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StlModelViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stl';
  renderer = new THREE.WebGLRenderer({ antialias: true })
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 15)
  controls = new OrbitControls(this.camera, this.renderer.domElement)
  scene = new THREE.Scene()
  light = new THREE.PointLight(0xffffff, 80)

  constructor() {
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = true

    // default camera position
    this.camera.position.set(3, 3, 3)

    // default light position
    this.light.position.set(1, 1, 2)

    // default scene background
    this.scene.background = new THREE.Color(0xffffff)

    this.controls.enableZoom = true
    this.controls.minDistance = 1
    this.controls.maxDistance = 7

    this.controls.update()
  }
}
