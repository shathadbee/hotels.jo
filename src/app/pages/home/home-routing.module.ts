import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAreaComponent } from './about-area/about-area.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  {path:'',
  redirectTo:'home',
  pathMatch:'full',},

  {path: 'home',
  component: HomeComponent}
  ,
  {path: 'hotels',
  component: HotelsComponent},
  {path: 'about-area',
  component: AboutAreaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
