import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoComponent } from './componenti/candidato/candidato.component';
import { CandidatiComponent } from './componenti/candidati/candidati.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'candidato', component: CandidatoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
