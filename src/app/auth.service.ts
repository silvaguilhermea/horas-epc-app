import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment'
import { Usuario } from './login/usuario';

import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/login"
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelperService: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    
    console.log(tokenString);
    if(tokenString){
      //const token = JSON.parse(tokenString).access_token
      const token = JSON.parse(tokenString);
      console.log("Obteve Token: " + token);
      return token;
    }
    return null;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token')
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if( token ){
      const usuario = this.jwtHelperService.decodeToken( token ).user_name
      return usuario;
    }
    return null;
  }

  isAuthenticated(): boolean{
    const token = this.obterToken();
    console.log("IsAuthenticated");
    if( token ) {
      console.log("IsAuthenticated com token");
      const expired = this.jwtHelperService.isTokenExpired( token )
      console.log(expired);
      //return !expired;
      return true;
    }
    return false;
  }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }

  tentarLogar( username: string, password: string ) : Observable<any> {
    const usuario = new Usuario()
    usuario.email = username;
    usuario.senha = password;

    /*
    const params = new HttpParams()
                        .set('email', username)
                        .set('senha', password)
                        .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post( this.tokenURL, params.toString(), {headers} );
    */

    
    return this.http.post<Usuario>( `${this.apiURL}` , usuario,
    {
        observe: 'response',
        responseType: 'json'
    });
    
  }
}
