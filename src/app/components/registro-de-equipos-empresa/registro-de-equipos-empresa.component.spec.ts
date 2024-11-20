import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeEquiposEmpresaComponent } from './registro-de-equipos-empresa.component';

describe('RegistroDeEquiposEmpresaComponent', () => {
  let component: RegistroDeEquiposEmpresaComponent;
  let fixture: ComponentFixture<RegistroDeEquiposEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroDeEquiposEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroDeEquiposEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
