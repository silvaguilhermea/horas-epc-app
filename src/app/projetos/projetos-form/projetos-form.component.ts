import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-projetos-form',
  templateUrl: './projetos-form.component.html',
  styleUrls: ['./projetos-form.component.css']
})
export class ProjetosFormComponent implements OnInit {

  success: boolean = false;
  errors: String[];
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
