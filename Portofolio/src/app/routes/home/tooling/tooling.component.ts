import { Component } from '@angular/core';

@Component({
  selector: 'app-tooling',
  templateUrl: './tooling.component.html',
  styleUrls: ['./tooling.component.scss']
})
export class ToolingComponent {
  tools = [
    {title: 'Angular', img: 'angular.svg'},
    {title: 'TypeScript', img: 'angular.svg'},
    {title: 'JavaScript', img: 'angular.svg'},
    {title: 'MongoDB', img: 'angular.svg'},
    {title: 'NodeJS', img: 'angular.svg'},
    {title: 'SQL', img: 'angular.svg'},
    {title: 'HTML5', img: 'angular.svg'},
    {title: 'Sass', img: 'angular.svg'},
    {title: 'C#', img: 'angular.svg'},
  ];
  constructor(){

  }
}
