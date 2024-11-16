import { Component } from '@angular/core';

@Component({
  selector: 'app-clista',
  templateUrl: './clista.component.html',
  styleUrl: './clista.component.css'
})
export class ClistaComponent {
   // Declaración de propiedades
   title: string = "Lista de Cursos";

   // Array de cursos con nombre y descripción
   private courses: { name: string, description: string }[];
 
   constructor() {
     this.courses = [
       { name: 'JAVA', description: 'Curso completo de desarrollo en JAVA.' },
       { name: 'JAVASCRIPT', description: 'Aprende JavaScript desde cero, incluyendo ES6 y más.' },
       { name: 'PYTHON', description: 'Curso de Python para principiantes y avanzados.' },
       { name: 'HTML & CSS', description: 'Domina las bases del diseño web con HTML y CSS.' },
       { name: 'Angular', description: 'Construye aplicaciones web dinámicas con Angular.' }
     ];
   }
 
   // Método para obtener la lista de cursos
   public getCourses(): { name: string, description: string }[] {
     return this.courses;
   }

}