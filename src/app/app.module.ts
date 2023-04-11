import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api-service';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarAppComponent } from './sidebar-app/sidebar-app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { RightAreaComponent } from './home-page/right-area/right-area.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CenterAreaComponent } from './home-page/center-area/center-area.component';
import { SearchComponent } from './home-page/center-area/search/search.component';
import { CurrentWeatherComponent } from './home-page/center-area/current-weather/current-weather.component';
import { LocationComponent } from './home-page/center-area/location/location.component';
import {
  LocalStorageService,
  LOCAL_STORAGE_SERVICE,
} from './service/local-storage-service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { MatDividerModule } from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemeService } from './service/theme-service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarAppComponent,
    CenterAreaComponent,
    RightAreaComponent,
    SearchComponent,
    CurrentWeatherComponent,
    HomePageComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  providers: [
    ApiService,
    LocalStorageService,ThemeService,DatePipe,
    { provide: LOCAL_STORAGE_SERVICE, useExisting: LOCAL_STORAGE },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
