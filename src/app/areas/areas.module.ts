import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasListaComponent } from './areas-lista/areas-lista.component';
import { AreasFormComponent } from './areas-form/areas-form.component';


@NgModule({
  declarations: [AreasListaComponent, AreasFormComponent],
  imports: [
    CommonModule,
    AreasRoutingModule
  ]
})
export class AreasModule { }
