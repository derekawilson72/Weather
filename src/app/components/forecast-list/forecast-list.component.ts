import { Component, OnInit } from '@angular/core';
import { Period, Forecast } from 'src/app/models/forecast';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {

  periods:Period[] = [];
  

  constructor(private forecastservice:ForecastService) { }

  ngOnInit(): void {

    console.log(1);

    //subscribe is asynch
    this.forecastservice.fetchForecast().subscribe(
      //working call
      (response:Forecast) => {
        
      console.log(response);
      let forecast = response;
      let properties = forecast.properties;
      let periods = properties.periods;
      this.periods = periods;
      console.log(periods);
      }, 
      //error handling
      (err) =>{
        console.log(err);
      }
    );
      
    //because subscribe is asynch, this will appear b4 api data
    console.log(2)
  }

}
