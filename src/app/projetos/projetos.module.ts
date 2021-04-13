import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosFormComponent } from './projetos-form/projetos-form.component';


@NgModule({
  declarations: [ProjetosFormComponent],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    FormsModule
  ],
  exports: [
    ProjetosFormComponent
  ]
})
export class ProjetosModule { }
