import { CurrentLocationData } from './../../../model/current-location-data';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage-service';
import { ThemeService } from 'src/app/service/theme-service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit, OnDestroy {
  @Input() currentLocationData: CurrentLocationData;

  constructor(private localStorageService: LocalStorageService,
    private themeService: ThemeService) { }

  isLight: boolean = true;

  ngOnInit(): void {
    this.themeService.themeSwitch.subscribe(event => this.isLight = event);
  }

  ngOnDestroy(): void {
    this.themeService.themeSwitch.unsubscribe();
  }

  selectFavorite() {
    this.currentLocationData.isFavorite = !this.currentLocationData.isFavorite;
    let currentLocationDataFavorites: CurrentLocationData[] =
      this.localStorageService.get('favorites');
    if (
      currentLocationDataFavorites == undefined ||
      currentLocationDataFavorites == null
    ) {
      currentLocationDataFavorites = [this.currentLocationData];
    } else {
      let index = currentLocationDataFavorites.findIndex(
        (locationData) => locationData.city == this.currentLocationData.city
      );
      if (index == -1) {
        currentLocationDataFavorites.push(this.currentLocationData);
      } else {
        currentLocationDataFavorites.splice(index, 1);
      }
    }

    this.localStorageService.set('favorites', currentLocationDataFavorites);
  }

  isFavorite(): string {
    if (this.currentLocationData.isFavorite) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
