import { Component } from '@angular/core';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent {
    myworks: {title:string, image:string, description: string, technology: string, url:string }[] = [
      {title: "Company Calendar", image: "img2.png", description: "Know Legal Requirements And Dates The Company Must Keep To Avoid Legal Santions After A Company Is Incorporated", technology: "angular", url: "https://www.google.com"},
      {title: "Other App", image: "img1.png", description: "Manage Your Phone Contacts The Easy Way. Create, Update And Delete Your Personal Contacts All From One App. This Is A MERN Stack App With React Redux Toolkit. Find Source Code On My Github", technology: "angular", url: "https://www.livescore.com/en/"},
      {title: "Phonebook App", image: "img3.png", description: "Manage Your Phone Contacts The Easy Way. Create, Update And Delete Your Personal Contacts All From One App. This Is A MERN Stack App With React Redux Toolkit. Find Source Code On My Github", technology: "angular", url: "https://www.goplay365.com/"},
      {title: "Second Other App", image: "img2.webp", description: "Know Legal Requirements And Dates The Company Must Keep To Avoid Legal Santions After A Company Is Incorporated", technology: "angular", url: "https://www.goplay365.com/"}
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
