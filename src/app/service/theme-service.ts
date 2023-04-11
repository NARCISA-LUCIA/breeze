import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class ThemeService { 
    @Output() themeSwitch: EventEmitter<boolean> = new EventEmitter();

    switchTheme(switchEvent:boolean) {
        this.themeSwitch.emit(switchEvent);
    }
}