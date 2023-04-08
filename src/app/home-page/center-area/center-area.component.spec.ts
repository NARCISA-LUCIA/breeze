import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAreaComponent } from './center-area.component';

describe('CenterAreaComponent', () => {
  let component: CenterAreaComponent;
  let fixture: ComponentFixture<CenterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
