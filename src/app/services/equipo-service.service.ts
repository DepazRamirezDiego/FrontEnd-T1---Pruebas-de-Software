import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Equipo } from '../models/equipo.model';

const baseUrlEquipo = AppSettings.API_ENDPOINT + '/equipo';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  constructor(private http: HttpClient) {}

  registrar(data:Equipo):Observable<any>{
    return this.http.post(baseUrlEquipo+ "/registrar", data);
  }
}
