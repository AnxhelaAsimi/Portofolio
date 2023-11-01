import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {
  @Input() title: string = "Company Calendar"; 
  @Input() description: string = "A Platform That Helps You Discover The Most Intriguing Locations For Your Vacations. Book Hotels And Spa's At A Cheaper Rate"; 
  @Input() image: string = "img1.webp"; 
  @Input() url: string = "https://www.google.com/"; 
  @Input() isRight: boolean = true;

}
