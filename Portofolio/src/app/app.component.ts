import { Component } from '@angular/core';
import { SharedService } from './service/shared.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portofolio';
  showPreloader: boolean;

  constructor(public sharedService: SharedService, private router: Router){
    this.showPreloader=true;
    // setTimeout(() => {
    //   this.showPreloader = false;
    // }, 4100);
    
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.showPreloader=true;
      setTimeout(() => {
        this.showPreloader = false;
      }, 4100);
    });

 

  }


}
