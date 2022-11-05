import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacturasModule } from './facturas/facturas.module';
import { ClientesModule } from './clientes/clientes.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FacturasModule,
    ClientesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
