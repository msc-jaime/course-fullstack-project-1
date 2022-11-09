import { Component } from '@angular/core';
import { PdfService } from './reports/pdf.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '11-example-angular-3';
  constructor(private httpClient: HttpClient) {}

  getPdfClientes(): any {
    this.getPdfClientes().subscribe()
  }

  public downloadPDF(): any {
    var mediaType = 'application/pdf';
    let api = "http://localhost:8000/api"
    this.httpClient.post(`${api}/view_pdf_clientes`, {location: "report.pdf"}, { responseType: 'blob' }).subscribe();
}
}

