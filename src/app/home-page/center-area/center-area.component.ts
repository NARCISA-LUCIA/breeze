import { CurrentWeather, DailyWeather } from './../../model/weather';

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api-service';
import { LocationResults } from 'src/app/model/location';
import { Weather } from 'src/app/model/weather';
import { CurrentLocationData } from 'src/app/model/current-location-data';
import { LocalStorageService } from 'src/app/service/local-storage-service';

@Component({
  selector: 'app-center-area',
  templateUrl: './center-area.component.html',
  styleUrls: ['./center-area.component.css'],
})
export class CenterAreaComponent implements OnInit {
  currentLocationDataArray: CurrentLocationData[] = [];
  dailyWeatherData: DailyWeather;
  currentLocationData: CurrentLocationData; 

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    let currentLocationDataFavorites: CurrentLocationData[] =
      this.localStorageService.get('favorites');
    if (
      currentLocationDataFavorites != undefined &&
      currentLocationDataFavorites != null
    ) {
      this.currentLocationDataArray = currentLocationDataFavorites;
    }
    console.log('ora =' + new Date());
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log('positia browser: ' + position.coords.longitude);
    });
  }

  sendToApiLocation(searchKeyword: string) {
    console.log('search = ' + searchKeyword);

    let latitude;
    let longitude;
    this.apiService
      .getCoordinates(searchKeyword)
      .subscribe((result: LocationResults) => {
        if (result) {
          latitude = result.results[0].geometry.lat;
          longitude = result.results[0].geometry.lng;
          let city = result.results[0].components.city;
          console.log('city ' + city);
          this.currentLocationData = new CurrentLocationData();
          this.currentLocationData.city = city;

          this.apiService
            .getWeatherLocation(latitude, longitude)
            .subscribe((result: Weather) => {
              if (result) {
                console.log('result: ' + result.daily.temperature_2m_max[0]);
                this.currentLocationData.temperature =
                  result.current_weather.temperature;
                this.currentLocationData.time = result.current_weather.time;
                this.currentLocationData.daily = result.daily;
                this.currentLocationData.hourly = result.hourly;
                this.currentLocationDataArray.push(this.currentLocationData);
              }
            });
        }
      });
  }

  isRightAreaVisible():boolean {
    if (this.currentLocationData == undefined || this.currentLocationData == null) {
      return false;
    } else {
      return true;
    }
  }
}
