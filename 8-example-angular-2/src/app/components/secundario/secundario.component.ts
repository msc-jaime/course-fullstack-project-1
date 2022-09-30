import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.scss']
})
export class SecundarioComponent implements OnInit {

  @Input() nameRef: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  name: string = ""

  changeName(): void {
    this.nameRef = "Gloria"
    this.name = this.nameRef
  }
}
