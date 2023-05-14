import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CandidatiService } from 'src/app/servizi/candidati.service';

@Component({
  selector: 'app-form-aggiungi-candidato',
  templateUrl: './form-aggiungi-candidato.component.html',
  styleUrls: ['./form-aggiungi-candidato.component.css']
})
export class FormAggiungiCandidatoComponent {

  candidatoForm: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private formBuilder: FormBuilder, private candidatiService: CandidatiService) {
    this.candidatoForm = this.formBuilder.group({
      nome: '',
      cognome: '',
      email: '',
      telefono: '',
      posizione: '',
      valutazione: '',
      note: ''
    })
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Inserisci un indirizzo email';
    }
    return this.email.hasError('email') ? 'Indirizzo non valido' : '';
  }


  onFormSubmit() {
    if (this.candidatoForm.valid) {
      console.log('Form aggiungi candidato valido, chiamata al service con dati:');
      console.log(this.candidatoForm.value);
      this.candidatiService.aggiungiCandidato(this.candidatoForm.value);
    }
  }

}
