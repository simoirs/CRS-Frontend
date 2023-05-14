import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatiService } from 'src/app/servizi/candidati.service';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent {

  note: any;

  constructor(private candidatiService: CandidatiService) {
    this.note = this.candidatiService.mostraNoteCandidato();
  }

  modificaCandidato() {

  }

  cancellaCandidato() {
    
  }


}
