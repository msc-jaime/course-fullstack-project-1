import { Component, OnInit } from '@angular/core';
import { LogginService } from 'src/app/services/loggin/loggin.service';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  
  constructor(private logginService: LogginService) { 
    this.logginService = logginService;
  }
  
  getToken():string {
    return this.logginService.getToken()
  }

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
