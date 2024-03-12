import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MY_WORKS } from 'src/app/shared/constants/myworks';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent {
    myworks = MY_WORKS;
    sliderSelection: number = 0;

    constructor(private router: Router){
    }

    changeSliderSelection(value:number){
      if(this.sliderSelection + value >= this.myworks.length)
        this.sliderSelection = 0;
      else if (this.sliderSelection + value < 0)
        this.sliderSelection = this.myworks.length-1;
      else
        this.sliderSelection += value;
      console.log(this.sliderSelection);
    }

    visitWork(workId: number){
      window.open(this.myworks[workId].url, "_blank");
    }
  
    navigateTo(menu: string) {
      this.router.navigate([menu]);
    }
  
}
