import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private api = 'http://localhost:8000/api/'
  private httpOptions = {
    header: new HttpHeaders({
      'Content-Type':	'application/json'
    })
  }

  constructor(private httClient: HttpClient) { }

  index() {
    return this.httClient.get(this.api + 'clientes/')
  }

  show(id: number) {
    return this.httClient.get(this.api + 'clientes/' + id)
  }

  create(cliente: Cliente) {
    return this.httClient.post(this.api + 'clientes/', JSON.stringify(cliente))
  }

  update(id: number,cliente: Cliente) {
    return this.httClient.put(this.api + 'clientes/' + id.toString, JSON.stringify(cliente))
  }

  delete(id: number) {
    return this.httClient.delete(this.api + 'clientes/' + id.toString)
  }
}
