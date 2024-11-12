import { Component } from '@angular/core';

@Component({
  selector: 'app-ccourse',
  templateUrl: './ccourse.component.html',
  styleUrl: './ccourse.component.css'
})
export class CcourseComponent {
//declaración de propiedades o atributos o variables

private courses!:string[];
private reponse:string|boolean;//unión de tipos
dir:string="Unimepresarial";
title:string="Formulario de Registro";
constructor(){
  this.courses = ['JAVA','PYTHON','JAVASCRIPT','TYPESCRIPT','C#'];
  this.reponse ="";
}
//métodos
public getCourses():string[]{
  return this.courses;
}
public getResponse():string|boolean{
  console.log(this.reponse);
  return this.reponse;
}
//encapsulación de método
private registerCourse(name:string,age:string,courses:string){
  return this.reponse=`Se ha inscrito en el Curso: ${courses} el estudiante: ${name} de edad: ${age}`;
}

public getRegisterCourse(name:string,age:string,courses:string){
  console.log(name,age,courses);
  this.registerCourse(name,age,courses);
}

}
