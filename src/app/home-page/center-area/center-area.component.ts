import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api-service';
import { LocationResults } from 'src/app/model/location';
import { Weather } from 'src/app/model/weather';


@Component({
  selector: 'app-center-area',
  templateUrl: './center-area.component.html',
  styleUrls: ['./center-area.component.css']
})
export class CenterAreaComponent {
 
  
  constructor(
    private apiService: ApiService,
  ) { }
  
  sendToApiLocation(searchKeyword: string) {
    console.log("search = " + searchKeyword);
    
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

          this.apiService
            .getWeatherLocation(latitude, longitude)
            .subscribe((result: Weather) => {
              if (result) {
                console.log('result ' + result);
              }
            });
        }
      });
  }
}
