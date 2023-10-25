import { Component } from '@angular/core';

@Component({
  selector: 'app-tooling',
  templateUrl: './tooling.component.html',
  styleUrls: ['./tooling.component.scss']
})
export class ToolingComponent {
  tools = [
    {title: 'React', img: 'angular.svg'},
    {title: 'Angular', img: 'angular.svg'},
    {title: 'Node', img: 'angular.svg'},
    {title: 'MongoDB', img: 'angular.svg'},
    {title: 'Javascript', img: 'angular.svg'},
    {title: 'Figma', img: 'angular.svg'},
    {title: 'Sass', img: 'angular.svg'},
    {title: 'Typescript', img: 'angular.svg'},
    {title: 'Solidly', img: 'angular.svg'},
    {title: 'Polygon', img: 'angular.svg'}
  ];
  constructor(){

  }
}
