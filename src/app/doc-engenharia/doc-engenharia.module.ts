import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DocEngenhariaRoutingModule } from './doc-engenharia-routing.module';
import { DocEngenhariaListaComponent } from './doc-engenharia-lista/doc-engenharia-lista.component';
import { DocEngenhariaFormComponent } from './doc-engenharia-form/doc-engenharia-form.component';


@NgModule({
  declarations: [DocEngenhariaListaComponent, DocEngenhariaFormComponent],
  imports: [
    CommonModule,
    DocEngenhariaRoutingModule,
    FormsModule
  ],
  exports: [
    DocEngenhariaFormComponent,
    DocEngenhariaListaComponent
  ]
})
export class DocEngenhariaModule { }
