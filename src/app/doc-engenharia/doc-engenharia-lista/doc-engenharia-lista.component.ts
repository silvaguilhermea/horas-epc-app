import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocEngenhariaService } from 'src/app/doc-engenharia.service';
import { DocEngenharia } from '../doc-engenharia';

@Component({
  selector: 'app-doc-engenharia-lista',
  templateUrl: './doc-engenharia-lista.component.html',
  styleUrls: ['./doc-engenharia-lista.component.css']
})
export class DocEngenhariaListaComponent implements OnInit {

  mensagemSucesso: string;
  mensagemErro: string;
  docsEngenharia: DocEngenharia[] = [];
  docEngenhariaSelecionado: DocEngenharia;
  
  constructor(
    private router: Router,
    private areaService: DocEngenhariaService
  ) { }

  ngOnInit(): void {
  }

  novoCadastro(){
    this.router.navigate(['/doc-engenharia/form']);
  }

  preparaDelecao(docEngenharia: DocEngenharia){
    this.docEngenhariaSelecionado = docEngenharia;
  }

  deletarDocEngenharia(){

  }

}
