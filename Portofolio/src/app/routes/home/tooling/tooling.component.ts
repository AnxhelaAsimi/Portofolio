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
    {title: 'Wordpress', img: 'wordpress.svg'},
    {title: 'Node.js', img: 'nodeJs.svg'},
    {title: 'C#', img: 'cSharp.svg'},
    {title: 'MongoDB', img: 'mongoDb.svg'},
    {title: 'MySQL', img: 'mySql.svg'}
  ];
  constructor(){

  }
}
