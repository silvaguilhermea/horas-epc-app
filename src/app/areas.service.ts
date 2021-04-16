import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Area } from './areas/area';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  apiURL: string = environment.apiURLBase + '/api/areas';

  constructor( private http: HttpClient ) { }

  salvar( area: Area ) : Observable<Area> {
    return this.http.post<Area>( `${this.apiURL}` , area );
  }
 
  atualizar( area: Area ) : Observable<any> {
    return this.http.put<Area>(`${this.apiURL}/${area.id}`, area);
 }
 
  getAreas() : Observable<Area[]> {
    return this.http.get<Area[]>( this.apiURL );
  }
 
  getAreaById(id: number) : Observable<Area> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar( area: Area ) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${area.id}`);
  }
  
}
