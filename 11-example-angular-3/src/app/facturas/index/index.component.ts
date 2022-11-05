import { Component, OnInit } from '@angular/core';
import { Factura } from '../factura';
import { FacturasService } from '../facturas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  facturas: Factura[] = []

  constructor(public facturasServices: FacturasService) { }

  ngOnInit(): void {
    this.facturasServices.index().subscribe((res: Factura[]) => {
      this.facturas = res
    })
  }

  deleteFactura(id: number) {
    this.facturas = this.facturas.filter(factura => factura.id !== id)
    this.facturasServices.delete(id).subscribe()
  }
}
