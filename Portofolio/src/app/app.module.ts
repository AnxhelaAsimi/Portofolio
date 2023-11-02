import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedService } from './service/shared.service';
import { ExpandedMenuComponent } from './shared/expanded-menu/expanded-menu.component';
import { HomeComponent } from './routes/home/home.component';
import { AvatarComponent } from './routes/home/avatar/avatar.component';
import { GotLostComponent } from './routes/got-lost/got-lost.component';
import { ToolingComponent } from './routes/home/tooling/tooling.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { ContactComponent } from './routes/contact/contact.component';
import { ShowroomComponent } from './routes/home/showroom/showroom.component';
import { WorkComponent } from './routes/work/work.component';
import { WorkItemComponent } from './routes/work/work-item/work-item.component';
import { HomeAboutComponent } from './routes/home/home-about/home-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpandedMenuComponent,
    HomeComponent,
    AvatarComponent,
    GotLostComponent,
    ToolingComponent,
    PreloaderComponent,
    ContactComponent,
    ShowroomComponent,
    WorkComponent,
    WorkItemComponent,
    HomeAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
