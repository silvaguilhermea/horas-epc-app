import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard'
import { SetoresFormComponent } from './setores-form/setores-form.component';
import { SetoresListaComponent } from './setores-lista/setores-lista.component';

const routes: Routes = [
  { path: 'setores', component: LayoutComponent, canActivate: [AuthGuard], children: [

    { path: 'form', component: SetoresFormComponent },
    { path: 'form/:id', component: SetoresFormComponent },
    { path: 'lista', component: SetoresListaComponent },
    { path: '', redirectTo: '/setores/lista', pathMatch: 'full' }
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
