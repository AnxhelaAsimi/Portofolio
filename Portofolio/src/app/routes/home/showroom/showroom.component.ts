import { Component } from '@angular/core';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent {
    myworks: {title:string, image:string, description: string, technology: string, url:string }[] = [
      {title: "Kids Afterschool Website", image: "img3.png", description: "I recently developed a lively WordPress website for a kids' after-school program, infusing it with vibrant colors, playful animations, and a user-friendly design. ", technology: "Wordpress", url: "https://mimicenter.com/en/home-english/"},
      {title: "Tic-Tac-Toe", image: "img2.png", description: "This is a Tic Tac Toe game developed by me using Angular, complete with custom-designed aesthetics for a polished and playful user interface.", technology: "angular", url: "https://tic-tac-toe-angular-glke.vercel.app/"},
      {title: "Other App", image: "img1.png", description: "Retro gameboy snake game: Another playful angular project I crafted with my own designs to bring back happy memories from childhood.", technology: "angular", url: "https://snake-game-blush.vercel.app/"},
    ];

    sliderSelection: number = 0;

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
  
}
