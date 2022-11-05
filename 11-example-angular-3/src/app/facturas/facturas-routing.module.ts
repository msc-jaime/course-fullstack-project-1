import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'facturas', redirectTo: 'facturas/index', pathMatch: 'full'},
  { path: 'facturas/index', component: IndexComponent },
  { path: 'facturas/create', component: CreateComponent },
  { path: 'facturas/:facturaId/edit', component: EditComponent },
  { path: 'facturas/:facturaId/show', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FacturasRoutingModule { }
