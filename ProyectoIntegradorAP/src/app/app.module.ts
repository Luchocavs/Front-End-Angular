import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { InfoComponent } from './Componentes/info/info.component';
import { AcercaDeComponent } from './Componentes/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './Componentes/experiencias/experiencias.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    InfoComponent,
    AcercaDeComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
