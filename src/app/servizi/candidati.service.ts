import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Candidato } from '../model/Candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatiService {

  noteCandidato: any;
  mostraDettagli = false;
  candidato: any //candidato da passare al candidatoComponent
  baseURL = 'http://localhost:8080/candidati'
  

  constructor(private http: HttpClient) { }


  getCandidati() {
    var chiamata = this.http.get<Candidato>(this.baseURL);
    console.log(chiamata);
    return chiamata;
  }

  getCandidato(id: number) {
    var chiamata = this.http.get<Candidato>(`${this.baseURL}/${id}`)
    console.log(chiamata);
    return chiamata;
  }

  aggiungiCandidato(data: Candidato) {
    console.log(this.http.post<Candidato>(this.baseURL, data));
    this.http.post<Candidato>(this.baseURL, data)
    .subscribe(data => {
      console.log(data)
    });
    
  }

  cancellaCandidato(id: number) {
    return this.http.delete<Candidato>(`${this.baseURL}/${id}`)
  }

  
  onCandidatoClick(candidato: Candidato) {
    this.noteCandidato = candidato.note;
  }

  mostraNoteCandidato() {
    return this.noteCandidato;
  }
}
