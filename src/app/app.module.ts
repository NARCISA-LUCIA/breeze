import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api-service';
import {MatMenuModule} from '@angular/material/menu';
import { SidebarAppComponent } from './sidebar-app/sidebar-app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import { RightAreaComponent } from './home-page/right-area/right-area.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CenterAreaComponent } from './home-page/center-area/center-area.component';
import { SearchComponent } from './home-page/center-area/search/search.component';
import { CurrentWeatherComponent } from './home-page/center-area/current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarAppComponent,
    CenterAreaComponent,
    RightAreaComponent,
    SearchComponent,
    CurrentWeatherComponent,
    HomePageComponent
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
    RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
