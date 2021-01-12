import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8086/api/clientes';
  
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`}
  );

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

  create(curso: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, curso, {headers: this.httpHeaders})
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(curso: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${curso.id}`, curso, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
