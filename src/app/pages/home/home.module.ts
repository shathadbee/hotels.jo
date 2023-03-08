import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutAreaComponent } from './about-area/about-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { HotelsModule } from '../hotels/hotels.module';


@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    HotelsComponent,
    AboutAreaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MatTabsModule,
    SharedModule,
    AuthModule,
    HotelsModule
  ]
})
export class HomeModule { }
