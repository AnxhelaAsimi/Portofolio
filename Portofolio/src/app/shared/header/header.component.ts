import { Component } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public sharedService: SharedService){

  }
  toggleMenu(){
    this.sharedService.toggleMenu();
  }

}
