import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { AreaProjetoRoutingModule } from './area-projeto-routing.module';
import { AreaProjetoFormComponent } from './area-projeto-form/area-projeto-form.component';
import { AreaProjetoListaComponent } from './area-projeto-lista/area-projeto-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AreaProjetoFormComponent, AreaProjetoListaComponent],
  imports: [
    CommonModule,
    AreaProjetoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AreaProjetoFormComponent,
    AreaProjetoListaComponent
  ]
})
export class AreaProjetoModule { }
