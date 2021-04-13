import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from '../area';

@Component({
  selector: 'app-areas-lista',
  templateUrl: './areas-lista.component.html',
  styleUrls: ['./areas-lista.component.css']
})
export class AreasListaComponent implements OnInit {

  mensagemSucesso: string;
  mensagemErro: string;
  areas: Area[] = [];
  areaSelecionada: Area;

  constructor(
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  novoCadastro(){
    this.router.navigate(['/areas/form']);
  }

  preparaDelecao(area: Area){
    this.areaSelecionada = area;
  }

  deletarArea(){

  }

}
