import { Component, OnInit } from '@angular/core';
import { LogginService } from 'src/app/services/loggin/loggin.service';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent implements OnInit {

  constructor(private logginService: LogginService) { 
    this.logginService = logginService;
  }
  
  setToken():void {
    this.logginService.setToken("QIKLGn5uLu")
  }

  getToken():string {
    return this.logginService.getToken()
  }

  ngOnInit(): void {
  }

  frutas: string[] = ['pera', 'manzana', 'uva', 'limon', 'tomate']
  
  isLogged: boolean = false

  addFrutas() {
    this.frutas.push('lulo')
  }

  nombre: string = "Pepito"

  setNombre(nombre: string){
    this.nombre = nombre
  }

  selectMarcaCarro:string = ""

}
