import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisoprivesComponent } from './avisoprives/avisoprives.component';
import { AvisoprivenComponent } from './avisopriven/avisopriven.component';



@NgModule({
  declarations: [
    AvisoprivesComponent,
    AvisoprivenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
