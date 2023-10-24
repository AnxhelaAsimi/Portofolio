import { Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.animateElements();
  }

  animateElements() {
    const tlm = gsap.timeline();

    tlm
      .fromTo(this.elementRef.nativeElement.querySelector('.b-one'), { fill: "#1E2128", opacity: 0, scale: 0.7 }, {
        fill: "#FF605C", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
      })
      // Add more animations for other elements as needed
  }
}
