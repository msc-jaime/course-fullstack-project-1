import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientes/', pathMatch: 'full' },
  { path: 'clientes/', component: IndexComponent },
  { path: 'clientes/create', component: CreateComponent },
  { path: 'clientes/edit/:clienteId', component: EditComponent },
  { path: 'clientes/show/:clienteId', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
