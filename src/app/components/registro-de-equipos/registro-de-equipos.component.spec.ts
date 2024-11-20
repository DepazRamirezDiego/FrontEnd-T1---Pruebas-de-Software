import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeEquiposComponent } from './registro-de-equipos.component';

describe('RegistroDeEquiposComponent', () => {
  let component: RegistroDeEquiposComponent;
  let fixture: ComponentFixture<RegistroDeEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroDeEquiposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroDeEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
