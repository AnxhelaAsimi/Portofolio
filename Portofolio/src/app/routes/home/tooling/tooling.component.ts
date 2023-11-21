import { Component } from '@angular/core';

@Component({
  selector: 'app-tooling',
  templateUrl: './tooling.component.html',
  styleUrls: ['./tooling.component.scss']
})
export class ToolingComponent {
  tools = [
    {title: 'Angular', img: 'angular.svg'},
    {title: 'TypeScript', img: 'typescript.svg'},
    {title: 'JavaScript', img: 'javascript.svg'},
    {title: 'HTML5', img: 'html5.svg'},    
    {title: 'CSS3', img: 'css3.svg'},

    {title: 'MongoDB', img: 'angular.svg'},
    {title: 'Node.js', img: 'angular.svg'},
    {title: 'MySQL', img: 'angular.svg'},
    {title: 'SQL Server', img: 'angular.svg'},
    {title: 'C#', img: 'angular.svg'},
  ];
  constructor(){

  }
}
