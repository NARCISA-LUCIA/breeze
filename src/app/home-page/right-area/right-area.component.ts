import { Component, Input } from '@angular/core';
import { CurrentLocationData } from 'src/app/model/current-location-data';
import { DailyWeather } from 'src/app/model/weather';

@Component({
  selector: 'app-right-area',
  templateUrl: './right-area.component.html',
  styleUrls: ['./right-area.component.css']
})
export class RightAreaComponent {
  @Input() currentLocationData: CurrentLocationData;


}
