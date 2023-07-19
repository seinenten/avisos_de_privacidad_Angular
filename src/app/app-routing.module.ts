import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoprivenComponent } from './pages/avisopriven/avisopriven.component';
import { AvisoprivesComponent } from './pages/avisoprives/avisoprives.component';

const routes: Routes = [
  {
    path: 'avisospriven',
    component: AvisoprivenComponent,
    pathMatch: 'full'
  },
  {
    path: 'avisosprives',
    component: AvisoprivesComponent,
  },
  {
    path: '**',
    redirectTo: 'avisospriven'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
