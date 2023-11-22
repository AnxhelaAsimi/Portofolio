import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  skills: {title:string, skill: string}[] = [ 
    {title:'Web Design', skill: '65%'},
    {title:'Angular', skill: '85%'},
    {title:'Javascript', skill: '90%'},
    {title:'HTML/CSS', skill: '95%'},
    {title:'NodeJS', skill: '75%'},
    {title:'Wordpress', skill: '80%'},

  ];

  hobbies: {title:string, img: string}[] = [
    {title: "Cooking", img: "cooking.svg"},
    {title: "Traveling", img: "traveling.svg"},
    {title: "Workout", img: "workout.svg"},
    {title: "Gardening", img: "gardening.svg"},
    {title: "Gaming", img: "gaming.svg"},
    {title: "Painting", img: "painting.svg"},

  ];

}
