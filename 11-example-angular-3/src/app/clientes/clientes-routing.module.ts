import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'clientes', redirectTo: 'clientes/index', pathMatch: 'full'},
  { path: 'clientes/index', component: IndexComponent },
  { path: 'clientes/create', component: CreateComponent },
  { path: 'clientes/:clienteId/edit', component: EditComponent },
  { path: 'clientes/:clienteId/show', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
