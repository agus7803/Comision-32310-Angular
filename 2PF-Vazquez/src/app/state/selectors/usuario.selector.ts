import { AppState } from "../app.state";
import { UsuarioState } from '../../modelo/usuario.state.model';
import { createSelector } from "@ngrx/store";

export const selectorUsuario = (state: AppState) => state.sesion;

export const selectorSesion = createSelector(
    selectorUsuario,
    (state: UsuarioState) => state
);

export const selectorUsuarioAdminState = createSelector(
    selectorUsuario,
    (state: UsuarioState) => state.usuario?.admin
);

export const selectorSesionActivaState = createSelector(
    selectorUsuario,
    (state: UsuarioState) => state.sesionActiva
);
