import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Models/persona.model';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data =>{this.persona=data})
  }

}
