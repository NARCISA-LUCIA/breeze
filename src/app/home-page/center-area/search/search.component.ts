import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchKeywordEvent = new EventEmitter<string>();

  formControlGroup: FormGroup = this.formBuilder.group({
    location: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  search(): void {
    let location = this.formControlGroup.controls['location'].value;
    console.log("location " + location);
    
    this.searchKeywordEvent.emit("eventemitter");
  }
}
