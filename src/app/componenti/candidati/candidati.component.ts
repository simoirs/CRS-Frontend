import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CandidatiService } from 'src/app/servizi/candidati.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { FormAggiungiCandidatoComponent } from '../form-aggiungi-candidato/form-aggiungi-candidato.component';


export interface Candidato {
  id: string;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  posizione: string;
  note: string;
}

@Component({
  selector: 'app-candidati',
  templateUrl: './candidati.component.html',
  styleUrls: ['./candidati.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class CandidatiComponent {

  colonne: string[] = ['id', 'nome', 'cognome', 'email', 'telefono', 'posizione', 'valutazione'];
  dataSource: MatTableDataSource<any>;
  mostraDettagli = false;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private candidatiService: CandidatiService, private _dialog: MatDialog) {
    this.candidatiService.getCandidati()
      .subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          console.log("Pre: ", this.dataSource.sort);
          this.dataSource.sort = this.sort;
          console.log("Post: ", this.dataSource.sort);
        },
        error: (e) => console.error(e)
      });
  }


  aggiungiCandidato() {
    this._dialog.open(FormAggiungiCandidatoComponent);
  }

  apriEditForm(candidato: any) {

  }

  cancellaCandidato(id: number) {

  }


  onClick(row: any, event: any) {
    console.log(row, event);
    if (this.mostraDettagli == false) {
      this.mostraDettagli = true;
    } else {
      this.mostraDettagli = false;
    }
    this.candidatiService.onCandidatoClick(row);
  }

  
  

  

}


