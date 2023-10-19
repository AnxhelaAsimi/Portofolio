import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedService } from './service/shared.service';
import { ExpandedMenuComponent } from './shared/expanded-menu/expanded-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpandedMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
