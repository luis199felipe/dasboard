import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAlmacenComponent } from './nuevo-almacen.component';

describe('NuevoAlmacenComponent', () => {
  let component: NuevoAlmacenComponent;
  let fixture: ComponentFixture<NuevoAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
