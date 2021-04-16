import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DocAutomacaoRoutingModule } from './doc-automacao-routing.module';
import { DocAutomacaoFormComponent } from './doc-automacao-form/doc-automacao-form.component';
import { DocAutomacaoListaComponent } from './doc-automacao-lista/doc-automacao-lista.component';


@NgModule({
  declarations: [DocAutomacaoFormComponent, DocAutomacaoListaComponent],
  imports: [
    CommonModule,
    DocAutomacaoRoutingModule,
    FormsModule
  ],
  exports: [
    DocAutomacaoFormComponent,
    DocAutomacaoListaComponent
  ]
})
export class DocAutomacaoModule { }
