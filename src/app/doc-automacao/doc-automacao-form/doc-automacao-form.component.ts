import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DocAutomacaoService } from 'src/app/doc-automacao.service';
import { DocAutomacao } from "../doc-automacao";

@Component({
  selector: 'app-doc-automacao-form',
  templateUrl: './doc-automacao-form.component.html',
  styleUrls: ['./doc-automacao-form.component.css']
})
export class DocAutomacaoFormComponent implements OnInit {

  docAutomacao: DocAutomacao;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: DocAutomacaoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.docAutomacao = new DocAutomacao();
   }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
      .getDocAutomacaoById( this.id )
      .subscribe(
        response => this.docAutomacao = response,
        errorResponse => this.docAutomacao = new DocAutomacao()
      )
    }
  }

  voltarParaListagem() {
    this.router.navigate(['doc-automacao/lista']);
  }

  onSubmit(){
    if( this.id ) {

      this.service
      .atualizar( this.docAutomacao )
      .subscribe( response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.success = false;
        this.errors = ['Erro ao atualizar o documento.']
      })

    } else {

      this.service.salvar(this.docAutomacao)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.docAutomacao = response;
        console.log(response);
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })

    }
  }

}
