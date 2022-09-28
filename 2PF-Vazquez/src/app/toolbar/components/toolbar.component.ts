import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectorUsuarioAdminState } from 'src/app/state/selectors/usuario.selector';
import { selectorSesionActivaState } from '../../state/selectors/usuario.selector';
import { cerrarSesion } from '../../state/actions/usuario.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolBarComponent implements OnInit {
  titulo = "Lista de estudiantes";
  usuarioAdmin$: Observable<boolean>;
  sesionActiva$: Observable<boolean>
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { 
    this.usuarioAdmin$ = this.store.select(selectorUsuarioAdminState);
    this.sesionActiva$ = this.store.select(selectorSesionActivaState)
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.store.dispatch(cerrarSesion());
    this.router.navigate(['/auth/login']);
  }

}
