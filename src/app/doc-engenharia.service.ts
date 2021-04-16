import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DocEngenharia } from './doc-engenharia/doc-engenharia';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DocEngenhariaService {

  apiURL: string = environment.apiURLBase + '/api/doc-engenharia';
  
  constructor( private http: HttpClient ) { }

  salvar( docEngenharia: DocEngenharia ) : Observable<DocEngenharia> {
    return this.http.post<DocEngenharia>( `${this.apiURL}` , docEngenharia );
  }
 
  atualizar( docEngenharia: DocEngenharia ) : Observable<any> {
    return this.http.put<DocEngenharia>(`${this.apiURL}/${docEngenharia.id}`, docEngenharia);
 }
 
  getDocsEngenharia() : Observable<DocEngenharia[]> {
    return this.http.get<DocEngenharia[]>( this.apiURL );
  }
 
  getDocEngenhariaById(id: number) : Observable<DocEngenharia> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar( docEngenharia: DocEngenharia ) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${docEngenharia.id}`);
  }
}
