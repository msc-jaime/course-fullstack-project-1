import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  token:string = "SVyclV7PSV"

  constructor() { }

  getToken():string {
    return this.token
  }

  setToken(token:string): void{
    this.token = token
  }
}
