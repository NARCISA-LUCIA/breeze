import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from '../service/theme-service';

@Component({
  selector: 'app-sidebar-app',
  templateUrl: './sidebar-app.component.html',
  styleUrls: ['./sidebar-app.component.css'],
})
export class SidebarAppComponent implements OnInit, OnDestroy {
  constructor(private themeService: ThemeService) {}

  isLight: boolean = true;

  ngOnInit(): void {
    this.themeService.themeSwitch.subscribe(event => this.isLight = event);
  }

  ngOnDestroy(): void {
    this.themeService.themeSwitch.unsubscribe();
  }

  toggle(event: MatSlideToggleChange) {
    console.log('Toggle fired: ' + event.checked);
    this.themeService.switchTheme(event.checked);
  }
}
