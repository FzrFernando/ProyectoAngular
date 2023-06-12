import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerjugadoresComponent } from './verjugadores/verjugadores.component';
import { VerjugadorComponent } from './verjugador/verjugador.component';
import { AddjugadorComponent } from './addjugador/addjugador.component';
import { EditjugadorComponent } from './editjugador/editjugador.component';
import { DeljugadorComponent } from './deljugador/deljugador.component';



@NgModule({
  declarations: [
    VerjugadoresComponent,
    VerjugadorComponent,
    AddjugadorComponent,
    EditjugadorComponent,
    DeljugadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JugadoresModule { }
