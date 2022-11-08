import { Component, Input, OnInit } from '@angular/core';
import { Period } from 'src/app/models/forecast';


@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnInit {



  @Input() period:Period = {} as Period;

  constructor() { }

  ngOnInit(): void {
  }

}
