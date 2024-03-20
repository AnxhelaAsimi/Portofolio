import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private tl: gsap.core.Timeline;
  element: HTMLElement | null = null;
  intersectionObserver: IntersectionObserver | null = null;
  public innerWidth: any;

  @ViewChild('timelineAnim') animatedElement: ElementRef | null = null;
  @ViewChild('line') line: ElementRef | null = null;
  @ViewChild('bubbles') bubbles: ElementRef | null = null;

  constructor(private ngZone: NgZone) {
    this.tl = gsap.timeline();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  ngAfterViewInit() {
    const tl = gsap.timeline();
    

    this.ngZone.runOutsideAngular(() => {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class to trigger the animation
            entry.target.classList.add('animated');
          } else {
            // Remove the class when not in the viewport
            entry.target.classList.remove('animated');
          }
        });
      });
      if(this.animatedElement)
        this.intersectionObserver?.observe(this.animatedElement.nativeElement);
    }); 
   
  }

  ngOnDestroy() {
    this.intersectionObserver?.disconnect();
  }
}
