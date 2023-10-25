import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-expanded-menu',
  templateUrl: './expanded-menu.component.html',
  styleUrls: ['./expanded-menu.component.scss']
})
export class ExpandedMenuComponent {
  selectedMenu: string;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService){
    this.selectedMenu='';

  }

  navigateTo(menu: string) {
    this.selectedMenu = menu;
    this.sharedService.toggleMenu();
    this.router.navigate([menu], { relativeTo: this.route });

  }
  
  ngOnInit() {
    this.selectedMenu = this.router.url.split('/')[1];
  }
}
