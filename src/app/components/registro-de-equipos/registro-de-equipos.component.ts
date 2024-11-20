import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Equipo } from '../../models/equipo.model';
import { EquipoService } from '../../services/equipo-service.service';

@Component({
  selector: 'app-registro-de-equipos',
  templateUrl: './registro-de-equipos.component.html',
  styleUrls: ['./registro-de-equipos.component.css'],
})
export class RegistroDeEquiposComponent {

  formularioEquipo= this.formBuilder.group({ 
    cod_equipo: ['', [Validators.required, Validators.pattern(/^PR\d{4}$/)]],
    nom_equipo: [
      '',
      [
        Validators.required,
        Validators.minLength(4), // Mínimo 4 caracteres.
        Validators.pattern(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/),
      ],
    ],
    fecha_mantenimiento: ['', [Validators.required, this.dateValidator]],
  });

  equipo: Equipo = {
    cod_equipo: '',
    nom_equipo: '',
    fecha_mantenimiento: '',
  };



  objEquipo: Equipo = {
    cod_equipo:'',
    nom_equipo: '',
    fecha_mantenimiento: '',
  };

  constructor(private formBuilder: FormBuilder ,private equipoService: EquipoService) {
   
  }

  dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const inputDate = new Date(control.value);
    const today = new Date();
    return inputDate > today ? null : { invalidDate: true };
  }

  registra() {
    this.equipoService.registrar(this.objEquipo).subscribe((x) => {
      Swal.fire({
        icon: 'info',
        title: 'Resultado del Registro',
        text: x.mensaje,
      });
    });
  }
}
