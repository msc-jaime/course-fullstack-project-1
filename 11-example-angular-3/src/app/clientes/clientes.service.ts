import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private api = 'http://localhost:8000/api/'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':	'application/json'
    })
  }

  constructor(private httClient: HttpClient) { }

  index(): Observable<Cliente[]> {
    return this.httClient.get<Cliente[]>(this.api + 'clientes/')
  }

  show(id: number): Observable<Cliente> {
    console.log(id.toString())
    return this.httClient.get<Cliente>(this.api + 'clientes/' + id)
  }

  create(cliente: Cliente) {
    return this.httClient.post(this.api + 'clientes/', JSON.stringify(cliente), this.httpOptions)
  }

  update(id: number,cliente: Cliente) {
    return this.httClient.put(this.api + 'clientes/' + id.toString(), JSON.stringify(cliente), this.httpOptions)
  }

  delete(id: number) {
    console.log('Conexion con api ok, borrando url:' + this.api + 'clientes/' + id.toString())
    return this.httClient.delete(this.api + 'clientes/' + id.toString())

  }
}
