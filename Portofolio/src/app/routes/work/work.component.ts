import { Component } from '@angular/core';
import { MY_WORKS } from 'src/app/shared/constants/myworks';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  myWorks = MY_WORKS;
}
