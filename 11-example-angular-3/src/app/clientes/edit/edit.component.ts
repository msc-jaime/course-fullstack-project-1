import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number
  form!: FormGroup
  cliente!: Cliente

  constructor(
    private clientesService : ClientesService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['clienteId'];
    console.log(this.id)
    this.clientesService.show(this.id).subscribe((cliente: Cliente) => {
      this.cliente = cliente
    })

    this.form = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
    })
  }

  submit() {
    console.log(this.form.value)
    return this.clientesService.update(this.id, this.form.value).subscribe( (res: any) => {
      this.router.navigateByUrl('clientes/index')
    })
  }
}
