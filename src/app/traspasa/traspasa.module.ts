import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtraspasoComponent } from './addtraspaso/addtraspaso.component';
import { VertransferenciasComponent } from './vertransferencias/vertransferencias.component';



@NgModule({
  declarations: [
    AddtraspasoComponent,
    VertransferenciasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TraspasaModule { }
