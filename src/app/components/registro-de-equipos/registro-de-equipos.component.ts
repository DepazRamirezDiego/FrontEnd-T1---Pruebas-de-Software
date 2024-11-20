import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Equipo } from '../../models/equipo.model';

@Component({
  selector: 'app-registro-de-equipos',
  templateUrl: './registro-de-equipos.component.html',
  styleUrls: ['./registro-de-equipos.component.css']
})
export class RegistroDeEquiposComponent {
  equipo: Equipo ={
    cod_equipo: '',
    nom_equipo: '',
    fecha_mantenimiento: '',
  }

  equipoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.equipoForm = this.fb.group({
      cod_equipo: [
        '',
        [
          Validators.required,
          Validators.pattern(/^PR\d{4}$/)
        ]
      ],
      nom_equipo: [
        '',
        [
          Validators.required,
          Validators.minLength(4), // Mínimo 4 caracteres.
          Validators.pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/)
        ]
      ],
      fecha_mantenimiento: [
        '',
        [
          Validators.required,
          this.dateValidator
        ]
      ]
    });
  }


  dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const inputDate = new Date(control.value);
    const today = new Date();
    return inputDate > today ? null : { invalidDate: true };
  }

  onSubmit() {
    if (this.equipoForm.valid) {
      const equipo: Equipo = this.equipoForm.value;
      console.log('Equipo registrado:', equipo);
      Swal.fire('Éxito', 'El registro ha sido exitoso', 'success');
      this.equipoForm.reset();
    } else {
      Swal.fire('Error', 'Corrija los errores antes de enviar', 'error');
    }
  }
}
