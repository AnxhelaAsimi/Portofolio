import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {
  isMenuToggled: boolean;
  constructor() {
    this.isMenuToggled = false;
  }

  toggleMenu() {
    this.isMenuToggled = !this.isMenuToggled;
    console.log(this.isMenuToggled);
  }
}