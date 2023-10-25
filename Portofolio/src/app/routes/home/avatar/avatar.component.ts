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
    //coffee steam
    .fromTo(this.elementRef.nativeElement.querySelector('.c-one'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.c-two'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })

    //window buttons
    .fromTo(this.elementRef.nativeElement.querySelector('.b-one'), { fill: "#1E2128", opacity: 0, scale: 0.7 }, {
      fill: "#FF605C", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.b-two'), { fill: "#1E2128", opacity: 0, scale: 0.7 }, {
      fill: "#FFBD44", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.b-three'), { fill: "#1E2128", opacity: 0, scale: 0.7 }, {
      fill: "#00CA4E", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
    })

    //lines of code
    .fromTo(this.elementRef.nativeElement.querySelector('.a-one'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-two'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-three'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-four'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-five'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-six'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-seven'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-eight'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })
    .fromTo(this.elementRef.nativeElement.querySelector('.a-nine'), {opacity: 0}, {
      opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
    })

  }
}
