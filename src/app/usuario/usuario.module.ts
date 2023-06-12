import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerusuariosComponent } from './verusuarios/verusuarios.component';
import { VerusuarioComponent } from './verusuario/verusuario.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { DelusuarioComponent } from './delusuario/delusuario.component';



@NgModule({
  declarations: [
    VerusuariosComponent,
    VerusuarioComponent,
    EditusuarioComponent,
    DelusuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
