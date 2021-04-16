import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocAutomacaoService } from 'src/app/doc-automacao.service';
import { DocAutomacao } from '../doc-automacao';

@Component({
  selector: 'app-doc-automacao-lista',
  templateUrl: './doc-automacao-lista.component.html',
  styleUrls: ['./doc-automacao-lista.component.css']
})
export class DocAutomacaoListaComponent implements OnInit {

  mensagemSucesso: string;
  mensagemErro: string;
  docsAutomacao: DocAutomacao[] = [];
  docAutomacaoSelecionado: DocAutomacao;

  constructor(
    private router: Router,
    private service: DocAutomacaoService
  ) { }

  ngOnInit(): void {
  }

  novoCadastro(){
    this.router.navigate(['/doc-automacao/form']);
  }

  preparaDelecao(docAutomacao: DocAutomacao){
    this.docAutomacaoSelecionado = docAutomacao;
  }

  deletarDocAutomacao(){

  }

}
