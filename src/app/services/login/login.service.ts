import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../util/Constantes';
import { Usuario } from 'src/app/entidades/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public getUsuarios() {
    return this.httpClient.get<Usuario[]>(`${Constantes.API}/usuarios`);
  }
}
