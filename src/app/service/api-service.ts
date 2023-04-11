import { LocationResults } from './../model/location';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../model/weather';
import { DatePipe } from '@angular/common';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient,
    public datepipe: DatePipe) { }

  getWeatherLocation(latitude: number, longitude: number): Observable<Weather> {
    let coordinates = 'latitude=' + latitude + '&longitude=' + longitude;
   
    var url =
      'https://api.open-meteo.com/v1/forecast?' +
      coordinates +
      '&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto';

    return this.httpClient.get<Weather>(url);
  }

  getCoordinates(cityName: string): Observable<LocationResults> {
    let url =
      'https://api.opencagedata.com/geocode/v1/json?q=' +
      cityName +
      '&key=2171aee5f664429eac7991bf306dd72c';
    return this.httpClient.get<LocationResults>(url);
  }
}
