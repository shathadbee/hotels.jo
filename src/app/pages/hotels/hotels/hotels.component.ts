import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelsAPIService } from 'src/app/services/hotels-api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  id = '';
  dataArray: any[] = [];
  constructor(
    private hotelsAPI: HotelsAPIService,
    public route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getAlHotels();
  }

  getParamsID() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
        console.log(this.id);
      }
    });
  }

  getAlHotels() {
    this.hotelsAPI.getHotels().subscribe((result: any) => {
      if (result) {
        this.dataArray = result;
      }
    });
  }
}
