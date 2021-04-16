import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';
import { DocEngenhariaFormComponent } from './doc-engenharia-form/doc-engenharia-form.component';
import { DocEngenhariaListaComponent } from './doc-engenharia-lista/doc-engenharia-lista.component';

const routes: Routes = [
  { path: 'doc-engenharia', component: LayoutComponent, canActivate: [AuthGuard], children: [

    { path: 'form', component: DocEngenhariaFormComponent },
    { path: 'form/:id', component: DocEngenhariaFormComponent },
    { path: 'lista', component: DocEngenhariaListaComponent },
    { path: '', redirectTo: '/doc-engenharia/lista', pathMatch: 'full' }
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocEngenhariaRoutingModule { }
