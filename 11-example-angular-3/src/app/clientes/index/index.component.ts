import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(public clientesServices: ClientesService) { }

  ngOnInit(): void {
    this.clientesServices.index().subscribe((res: Cliente[]) => {
      this.clientes = res
    })
  }

  deleteCliente(id: number) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id)
    this.clientesServices.delete(id).subscribe()
  }
}
