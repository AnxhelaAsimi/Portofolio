import { Component, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, OnDestroy {
  private timer: any;
  progress: number = 10;
  private tl: gsap.core.Timeline;

  constructor() {
    this.tl = gsap.timeline();
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress >= 100 ? 10 : this.progress + 10;

      // Implement your GSAP animations here
      this.tl
        .to('.square', {
          opacity: 0.7
        })
        .to('.square', {
          duration: 1.5,
          ease: 'powerInOut',
          opacity: 1,
          repeat: -1,
          yoyo: true
        });
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}