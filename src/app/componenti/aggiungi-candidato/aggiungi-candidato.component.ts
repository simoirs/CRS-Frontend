import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormAggiungiCandidatoComponent } from '../form-aggiungi-candidato/form-aggiungi-candidato.component';

@Component({
  selector: 'app-aggiungi-candidato',
  templateUrl: './aggiungi-candidato.component.html',
  styleUrls: ['./aggiungi-candidato.component.css']
})
export class AggiungiCandidatoComponent {

  constructor(private _dialog: MatDialog) {}

  aggiungiCandidato() {
    this._dialog.open(FormAggiungiCandidatoComponent);
  }

}
