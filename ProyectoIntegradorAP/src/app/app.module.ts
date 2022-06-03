import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { InfoComponent } from './Componentes/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
