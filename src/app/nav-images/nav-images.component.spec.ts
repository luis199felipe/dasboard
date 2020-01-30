import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavImagesComponent } from './nav-images.component';

describe('NavImagesComponent', () => {
  let component: NavImagesComponent;
  let fixture: ComponentFixture<NavImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
