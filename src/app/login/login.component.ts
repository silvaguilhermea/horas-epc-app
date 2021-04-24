import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  senha: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    
    this.authService
          .tentarLogar( this.email, this.senha )
          .subscribe( response => {
            console.log(response.headers.get('Authorization'));
            const access_token = JSON.stringify( response.headers.get('Authorization') );
            localStorage.setItem('access_token', access_token)
            this.router.navigate(['/home'])
          }, errorResponse => {
            console.log(errorResponse.headers.get('Authorization'));
            console.log(errorResponse['body']);
            this.errors = ['Usuário e/ou senha incorreto(s).']
          })
    
  }

  preparaCadastrar(event: any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.email = this.email;
    usuario.senha = this.senha;
    this.authService
        .salvar(usuario)
        .subscribe( response => {
            this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
            this.cadastrando = false;
            this.email = '';
            this.senha = '';
            this.errors = [];
        }, errorResponse => {
            this.mensagemSucesso = "";
            this.errors = errorResponse.error.errors;
        })
  }

}
