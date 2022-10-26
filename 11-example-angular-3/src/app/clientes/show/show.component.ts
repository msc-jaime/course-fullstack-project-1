import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  id: number = 0
  cliente!: Cliente

  constructor(
    private clientesService : ClientesService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['clienteId'];
    this.clientesService.show(this.id).subscribe( (cliente: Cliente) => {
      this.cliente = cliente
    })
  }

}
