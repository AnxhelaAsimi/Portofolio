import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit, AfterViewInit, OnDestroy {
  public innerWidth: any;
  
  intersectionObserver: IntersectionObserver | null = null;
  @ViewChild('timelineAnim') animatedElement: ElementRef | null = null;
  
  constructor(private ngZone: NgZone) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  ngAfterViewInit() {
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
