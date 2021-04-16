import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresListaComponent } from './setores-lista/setores-lista.component';
import { SetoresFormComponent } from './setores-form/setores-form.component';


@NgModule({
  declarations: [SetoresListaComponent, SetoresFormComponent],
  imports: [
    CommonModule,
    SetoresRoutingModule,
    FormsModule
  ],
  exports: [
    SetoresListaComponent,
    SetoresFormComponent
  ]
})
export class SetoresModule { }
