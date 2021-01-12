import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:8086/api/login';
  token;

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'}
  );

  constructor(private http: HttpClient, private router: Router) { }
  
  login(usuario: string, password: string) {
    this.http.post(this.uri, {username: usuario, password: password},  {headers: this.httpHeaders})
      .subscribe((resp: any) => {
        this.router.navigate(['/clientes']);
        localStorage.setItem('token', resp.token);
      });
  }

  logout() {
    localStorage.removeItem('token');
  }
 
  public get logIn(): boolean {
    console.log(localStorage.getItem('token') !== null);
    return (localStorage.getItem('token') !== null);
  }
}
