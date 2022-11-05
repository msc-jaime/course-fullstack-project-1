import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from './factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  private api = 'http://localhost:8000/api/'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':	'application/json'
    })
  }

  constructor(private httClient: HttpClient) { }

  index(): Observable<Factura[]> {
    return this.httClient.get<Factura[]>(this.api + 'facturas/')
  }

  show(id: number): Observable<Factura> {
    console.log(id.toString())
    return this.httClient.get<Factura>(this.api + 'facturas/' + id)
  }

  create(factura: Factura) {
    return this.httClient.post(this.api + 'facturas/', JSON.stringify(factura), this.httpOptions)
  }

  update(id: number,factura: Factura) {
    return this.httClient.put(this.api + 'facturas/' + id.toString(), JSON.stringify(factura), this.httpOptions)
  }

  delete(id: number) {
    console.log('Conexion con api ok, borrando url:' + this.api + 'factura/' + id.toString())
    return this.httClient.delete(this.api + 'facturas/' + id.toString())

  }
}
