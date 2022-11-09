import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  api = "http://localhost:8000/api"
  constructor(private httpClient: HttpClient) { }

  getPdfClientes()  {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.httpClient.get(`${this.api}/view_pdf_clientes`, { headers: headers, responseType: 'blob' as 'json' });
    //return this.httpClient.get(`${this.api}/view_pdf_clientes`, {responseType: 'blob'})
  }

}
