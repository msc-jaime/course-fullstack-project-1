import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    IndexComponent,
    ShowComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ClientesModule { }
