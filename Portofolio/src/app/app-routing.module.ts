import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { GotLostComponent } from './routes/got-lost/got-lost.component';
import { ContactComponent } from './routes/contact/contact.component';
import { WorkComponent } from './routes/work/work.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
   { path: 'work', component: WorkComponent },
  { path: '**', component: GotLostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
