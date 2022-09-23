import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isDisable:boolean = true

  nombre = "Juan"

  cambiarNombre(){
    this.nombre = "Carlos"
  }

  contador:number = 0

  sumarContador(){
    this.contador++
  }

}
