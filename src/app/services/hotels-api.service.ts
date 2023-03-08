import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHotels } from '../models/hotels.interface';
@Injectable({
  providedIn: 'root',
})
export class HotelsAPIService {
  constructor(private http: HttpClient) {}

  getHotels(): Observable<IHotels | null> {
    const url: string = 'http://localhost:8000/hotels';
    return this.http.get<IHotels>(url);
  }

  getHotelById(id: string) {
    const url: string = 'http://localhost:8000/hotels/';
    return this.http.get<IHotels>(url + id);
  }
}
