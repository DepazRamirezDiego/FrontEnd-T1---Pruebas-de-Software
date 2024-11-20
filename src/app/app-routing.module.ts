import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { RegistroDeEquiposComponent } from './components/registro-de-equipos/registro-de-equipos.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'registro', component: RegistroDeEquiposComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
