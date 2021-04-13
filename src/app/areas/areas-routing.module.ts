import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard'
import { AreasFormComponent } from './areas-form/areas-form.component';
import { AreasListaComponent } from './areas-lista/areas-lista.component';

const routes: Routes = [
  { path: 'areas', component: LayoutComponent, canActivate: [AuthGuard], children: [

    { path: 'form', component: AreasFormComponent },
    { path: 'form/:id', component: AreasFormComponent },
    { path: 'lista', component: AreasListaComponent },
    { path: '', redirectTo: '/areas/lista', pathMatch: 'full' }
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
