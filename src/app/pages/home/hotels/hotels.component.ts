import { Component, OnInit } from '@angular/core';
import { IHotels } from 'src/app/models/hotels.interface';
import { HotelsAPIService } from 'src/app/services/hotels-api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  cities: any[] = [];
  dataArray: any[] = [];
  current: any;
  constructor(private hotelsAPI: HotelsAPIService) {}

  ngOnInit(): void {
    this.getAlHotels();
  }

  getAlHotels() {
    this.hotelsAPI.getHotels().subscribe((result: any) => {
      if (result) {
        this.dataArray = result;
      }
      this.getCities();
    });
  }

  getCities() {
    this.hotelsAPI.getHotels().subscribe((result: any) => {
      this.cities = [];
      for (let x = 0; x < result.length; x++) {
        if (this.cities.includes(result[x].city)) {
          continue;
        } else {
          this.cities.push(result[x].city);
        }
      }
    });
  }
  //get cities
  /*getCities(){
  this.cities = [];
  for(let x=0;x<=this.dataArray.length;x++){
    if(this.cities.includes(this.dataArray[x].city)){
  continue;
    }
    else{
      this.cities.push(this.dataArray[x].city)
    }

  }
}*/

  tabChanged($event: any) {
    if (this.cities) {
      this.current = [];
      this.dataArray.forEach((hotel: IHotels) => {
        let city_Name = hotel.city;
        if (city_Name.includes($event.tab.textLabel as never)) {
          this.current.push(hotel);
        }
      });
    }
  }
}
