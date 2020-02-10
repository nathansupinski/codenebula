import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js'; //never used in ts but required for view to work

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    const parallaxContainer = document.getElementById('parallax-container');
    const parallaxInstance = new Parallax(parallaxContainer, {
      relativeInput: true,
      hoverOnly: true
    });
  }

}
