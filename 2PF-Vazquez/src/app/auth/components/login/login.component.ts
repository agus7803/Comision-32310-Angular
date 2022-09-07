import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Usuario } from '../../../modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  hide = true;
  
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) { 
    this.formulario = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }


  login(){
    const usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasenia: this.formulario.value.contrasenia
    }
    this.auth.iniciarSesion(usuario);
    console.log(this.formulario)
    this.router.navigate(['/Cursos']);
  }
}
