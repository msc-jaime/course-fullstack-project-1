import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    IndexComponent,
    ShowComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CrudModule { }
