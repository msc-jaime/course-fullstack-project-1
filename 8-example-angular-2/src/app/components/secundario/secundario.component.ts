import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.scss']
})
export class SecundarioComponent implements OnInit {

  @Input() nameRef: string = ""
  @Output() salidaNameRef = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  name: string = ""
  numero: number = 0

  changeName(): void {
    this.name = this.nameRef
  }

  emitirEvent() {
    this.numero += 1
    this.salidaNameRef.emit(this.numero)
  }
}
