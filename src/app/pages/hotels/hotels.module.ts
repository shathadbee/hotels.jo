import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HotelDetailsComponent,
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    SharedModule

  ]
})
export class HotelsModule { }
