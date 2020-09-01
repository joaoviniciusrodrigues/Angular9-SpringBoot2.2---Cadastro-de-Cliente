import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');

  }

  getClienteById(id:number): Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }


}
