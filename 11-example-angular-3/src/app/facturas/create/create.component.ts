import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { FacturasService } from '../facturas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup
  clientes!: Cliente[]

  constructor(
    public facturasService: FacturasService,
    public clientesService: ClientesService,
    private router: Router
    ) {
      this.clientesService.index().subscribe(res => this.clientes = res)
    }

  ngOnInit(): void {
    this.form = new FormGroup({
      numero_factura: new FormControl(''),
      fecha_vencimiento: new FormControl(''),
      id_cliente: new FormControl(''),
    })
  }

  submit() {
    console.log(this.form.value)
    this.facturasService.create(this.form.value).subscribe( res => {
      this.router.navigateByUrl('facturas/index')
    })
  }

}
