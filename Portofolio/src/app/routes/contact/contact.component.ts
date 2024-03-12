import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  redirectHome(e: any){
    //e.preventDefault();
    //window.location.href = 'http://localhost:4200/contact';
  }
}
