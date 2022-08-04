import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  variable1: number = 0;
  usuarios: Usuario[] = [];
  usuarios1: Usuario[] = [
    {
      nombre: 'Agustin',
      apellido: 'Vazquez',
      email: 'agustin@mail.com'
    }, {
      nombre: 'Paula',
      apellido: 'Varela',
      email: 'paula@mail.com'
    }, {
      nombre: 'Santiago',
      apellido: 'Perez',
      email: 'santiago@mail.com'
    }, {
      nombre: 'Sofia',
      apellido: 'Rodriguez',
      email: 'sofia@mail.com'
    }
  ]
  usuarios2: Usuario[] = [
    {
      nombre: 'Clara',
      apellido: 'Martinez',
      email: 'clara@mail.com'
    },
    {
      nombre: 'Lucia',
      apellido: 'Piriz',
      email: 'lucia@mail.com'
    },
    {
      nombre: 'Felipe',
      apellido: 'Rios',
      email: 'felipe@mail.com'
    },
    {
      nombre: 'Matias',
      apellido: 'Silva',
      email: 'matias@mail.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  cambiarVariable1() {
    if (this.variable1 == 0) {
      this.variable1 = 1;
      this.usuarios = this.usuarios1;
    } else if (this.variable1 == 1) {
      this.variable1 = 2;
      this.usuarios = this.usuarios2;
    } else {
      this.variable1 = 1;
      this.usuarios = this.usuarios1;
    }
  }

}
