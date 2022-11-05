import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from '../factura';
import { FacturasService } from '../facturas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number
  form!: FormGroup
  factura!: Factura;

  constructor(
    private facturasService : FacturasService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      numero_factura: new FormControl(''),
      fecha_vencimiento: new FormControl(''),
      id_cliente: new FormControl('')
    })

    this.id = this.route.snapshot.params['facturaId'];
    console.log(this.id)
    this.facturasService.show(this.id).subscribe((factura: Factura) => {
      this.factura = factura
      this.form.patchValue({
        numero_factura: this.factura.numero_factura,
        fecha_vencimiento: this.factura.fecha_vencimiento,
        id_cliente: this.factura.id_cliente
      })
    })



  }

  submit() {
    console.log(this.form.value)
    return this.facturasService.update(this.id, this.form.value).subscribe( (res: any) => {
      this.router.navigateByUrl('factura/index')
    })
  }
}
