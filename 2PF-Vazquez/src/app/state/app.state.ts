import { ActionReducerMap } from '@ngrx/store';
import { UsuarioState } from '../modelo/usuario.state.model';
import { usuarioReducer } from './reducers/usuario.reducer';
export interface AppState {
    sesion: UsuarioState;
}

export const  ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sesion: usuarioReducer
}