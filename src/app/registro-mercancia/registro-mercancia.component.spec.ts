import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMercanciaComponent } from './registro-mercancia.component';

describe('RegistroMercanciaComponent', () => {
  let component: RegistroMercanciaComponent;
  let fixture: ComponentFixture<RegistroMercanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMercanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
