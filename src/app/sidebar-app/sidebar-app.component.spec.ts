import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAppComponent } from './sidebar-app.component';

describe('SidebarAppComponent', () => {
  let component: SidebarAppComponent;
  let fixture: ComponentFixture<SidebarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
