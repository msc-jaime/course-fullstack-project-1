import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup

  constructor(public clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
    })
  }

  submit() {
    console.log(this.form.value)
    this.clientesService.create(this.form.value).subscribe( res => {
      this.router.navigateByUrl('clientes/index')
    })
  }

}
