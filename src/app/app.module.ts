import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EquipoModule } from './equipo/equipo.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { TraspasaModule } from './traspasa/traspasa.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        EquipoModule,
        JugadoresModule,
        TraspasaModule,
        UsuarioModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }