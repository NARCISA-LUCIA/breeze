import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './service/theme-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'breeze';
  isLight: boolean = true;

  constructor(private themeService: ThemeService) { }
  
  ngOnInit(): void {
    this.themeService.themeSwitch.subscribe(event => this.isLight = event);
  }

  ngOnDestroy(): void {
    this.themeService.themeSwitch.unsubscribe();
  }


}
