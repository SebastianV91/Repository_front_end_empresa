import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Clients} from './clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url:string="http://localhost:8084/api/clients";

  constructor(private http:HttpClient) { }

  //Obtener Clientes
  getAll():Observable<Clients[]>{
    return this.http.get<Clients[]>(this.url);
  }

  create(client:Clients):Observable<Clients>{
    return this.http.post<Clients>(this.url, client);
  }

}
