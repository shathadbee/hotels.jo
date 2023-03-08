import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  { path: '', redirectTo: 'hotels-list', pathMatch: 'full' },

  { path: 'hotel-details/:id', component: HotelDetailsComponent },
  { path: 'hotels-list', component: HotelsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsRoutingModule {}
