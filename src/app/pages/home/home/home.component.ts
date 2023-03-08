import { Component, OnInit } from '@angular/core';
import { HotelsAPIService } from 'src/app/services/hotels-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private hotelsAPI: HotelsAPIService) {}
  ngOnInit(): void {

  }



}
