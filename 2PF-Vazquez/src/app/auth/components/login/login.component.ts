import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/modelo/sesion';
import { AppState } from 'src/app/state/app.state';
import { AuthService } from '../../../core/services/auth.service';
import { Usuario } from '../../../modelo/usuario';
import { crearSesion } from '../../../state/actions/usuario.action';
import { selectorUsuarioAdminState } from '../../../state/selectors/usuario.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  hide = true;
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router

  ) {
    this.formulario = fb.group({
      nombreUsuario: new FormControl('Ruby.MacGyver76', [Validators.required]),
      contrasenia: new FormControl('0KRAklRVOWbr7c2', [Validators.required]),
      admin: new FormControl(true)
    });
    const sesion: Sesion = {
      sesionActiva: false,
    }
    this.sesionSubject = new BehaviorSubject(sesion);

  }

  ngOnInit(): void {
  }


  login() {
    const nombreUsuario = this.formulario.value.nombreUsuario;
    const contrasenia = this.formulario.value.contrasenia;
    const admin = this.formulario.value.admin;

    this.auth.iniciarSesion(nombreUsuario, contrasenia, admin)
  }
}
