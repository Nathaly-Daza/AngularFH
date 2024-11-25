import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input()
  counterAdd:number = 0;

  @Output()
  emitAdd: EventEmitter<number> = new EventEmitter();

  increment():void{
    console.log(this.counterAdd);
    this.counterAdd++;
  }
}
