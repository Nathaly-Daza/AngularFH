import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  counter:number = 10;

  handleCounter(value:number){
    this.counter = value;
  }

/*   counter:number = 0;

  increment():void{
    this.counter++;
  }

  decrement():void{
    this.counter--;
  } */


}
