import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAreaComponent } from './right-area.component';

describe('RightAreaComponent', () => {
  let component: RightAreaComponent;
  let fixture: ComponentFixture<RightAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
