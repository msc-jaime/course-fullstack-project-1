import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from '../factura';
import { FacturasService } from '../facturas.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  id: number = 0
  factura: Factura;

  constructor(
    private facturasServices : FacturasService,
    public route: ActivatedRoute
  ) {
    this.factura = {
      id: 0,
      numero_factura: "",
      fecha_vencimiento: "",
      id_cliente: 0,
      created_at: "",
      updated_at: ""
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['facturaId'];
    this.facturasServices.show(this.id).subscribe( (factura: Factura) => {
      this.factura = factura
    })
  }

}
