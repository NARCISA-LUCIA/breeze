import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GeolocationService{
    constructor(private httpClient: HttpClient) { }

    getPosition(): void{
        window.navigator.geolocation.getCurrentPosition(position => {
            console.log("positia browser: " + position);
        });
    }
}