import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DocEngenhariaService } from 'src/app/doc-engenharia.service';
import { DocEngenharia } from '../doc-engenharia';

@Component({
  selector: 'app-doc-engenharia-form',
  templateUrl: './doc-engenharia-form.component.html',
  styleUrls: ['./doc-engenharia-form.component.css']
})
export class DocEngenhariaFormComponent implements OnInit {

  docEngenharia: DocEngenharia;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: DocEngenhariaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.docEngenharia = new DocEngenharia();
   }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
      .getDocEngenhariaById( this.id )
      .subscribe(
        response => this.docEngenharia = response,
        errorResponse => this.docEngenharia = new DocEngenharia()
      )
    }
  }

  voltarParaListagem() {
    this.router.navigate(['doc-engenharia/lista']);
  }

  onSubmit(){
    if( this.id ) {

      this.service
      .atualizar( this.docEngenharia )
      .subscribe( response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.success = false;
        this.errors = ['Erro ao atualizar o documento.']
      })

    } else {

      this.service.salvar(this.docEngenharia)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.docEngenharia = response;
        console.log(response);
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })

    }
  }

}
