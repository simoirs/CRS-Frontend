import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CandidatiService } from 'src/app/servizi/candidati.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  dataSource: any;
  mostraDettagli = false;

  constructor(private candidatiService: CandidatiService) {
  }

  ngOnInit() {
    console.log('OnInit candidatiComponent - Chiamata a candidatiService.getCandidati()')
    this.candidatiService.getCandidati()
      .subscribe({
        next: (data) => {
          this.dataSource = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
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


