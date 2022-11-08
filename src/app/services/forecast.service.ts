import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Period, Forecast} from '../models/forecast';




@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http:HttpClient) { }

  url:string = "https://api.weather.gov/gridpoints/DTX/65,33/forecast";

  fetchForecast(): Observable<Forecast> {
    return this.http.get<Forecast>(this.url);
    
  }



}
