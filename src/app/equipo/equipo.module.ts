import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerequiposComponent } from './verequipos/verequipos.component';
import { VerequipoComponent } from './verequipo/verequipo.component';
import { AddequipoComponent } from './addequipo/addequipo.component';
import { DelequipoComponent } from './delequipo/delequipo.component';
import { EditequipoComponent } from './editequipo/editequipo.component';



@NgModule({
  declarations: [
    VerequiposComponent,
    VerequipoComponent,
    AddequipoComponent,
    DelequipoComponent,
    EditequipoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EquipoModule { }
