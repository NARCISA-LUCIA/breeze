import { LocationResults } from './../model/location';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../model/weather';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getWeatherLocation(latitude: number,longitude:number): Observable<Weather> {
    // pass location (City) as input parameter in the method from UI
      
      

    //We get latitude and longitude dynamic based on location
      let coordinates = "latitude=" + latitude + "&longitude=" + longitude;
      console.log("coordinates ==== " + coordinates);
      
    var url =
      'https://api.open-meteo.com/v1/forecast?' +
      coordinates +
      '&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&past_days=10';

    return this.httpClient.get<Weather>(url);
  }

  getCoordinates(cityName: string):Observable<LocationResults> {
    // call external service to get lattitude and longitude based on City that brings: lattitude and longitude
      let url = "https://api.opencagedata.com/geocode/v1/json?q=" + cityName + "&key=2171aee5f664429eac7991bf306dd72c";
      return this.httpClient.get<LocationResults>(url);
     
    
  }
}
