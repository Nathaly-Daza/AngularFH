import { Component } from '@angular/core';
/* 
@Component({
  selector: 'app-cfooter',
  templateUrl: './cfooter.component.html',
  styleUrl: './cfooter.component.css'
})
export class CfooterComponent {

}
 */

@Component({
  selector: 'app-cfooter',
  templateUrl: './cfooter.component.html',
  styleUrl: './cfooter.component.css'
})
export class CfooterComponent {

  //DataBinding por atributo
  public texto:string="Todos los derechos reservados  ";
  public texto2:string="<strong><i><u> Todos los derechos reservados </u></i></strong>";
}
