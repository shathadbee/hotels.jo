import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IHotels } from 'src/app/models/hotels.interface';
import { HotelsAPIService } from 'src/app/services/hotels-api.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent implements OnInit {
  id = '';
  hotel!: IHotels[];
  constructor(
    public route: ActivatedRoute,
    private _router: Router,
    private _hotelsAPI: HotelsAPIService
  ) {}
  ngOnInit(): void {
    this.getParamsID();
    this.getHotelById();
  }
  getParamsID() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
      }
    });
  }
  getHotelById() {
    this._hotelsAPI.getHotelById(this.id).subscribe((data) => {
      if (data) {
        this.hotel = [];
        this.hotel.push(data);
      }
    });
  }
}
