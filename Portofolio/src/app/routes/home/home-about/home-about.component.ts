import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private tl: gsap.core.Timeline;

  @ViewChild('line') line: ElementRef | null = null;
  @ViewChild('bubbles') bubbles: ElementRef | null = null;

  constructor() {
    this.tl = gsap.timeline();
  }

  ngOnInit() {
    // Set initial states for SVG elements (e.g., hidden)
    // if(this.line)
    //   gsap.set(this.line.nativeElement, { drawSVG: '0% 0%' });

    // if(this.bubbles)
    //   gsap.set(this.bubbles.nativeElement, { autoAlpha: 0 });
  }

  ngAfterViewInit() {
    // Define your animation timeline
    const tl = gsap.timeline();

    // // Animate the line
    // if(this.line)
    //   tl.to(this.line.nativeElement, { duration: 2, drawSVG: '100% 100%' });
    
    // if(this.bubbles)
    // // Animate each bubble one after the other
    // tl.to(this.bubbles.nativeElement.children, { duration: 0.5, autoAlpha: 1, stagger: 0.5 });
  }

  ngOnDestroy() {
  }
}
