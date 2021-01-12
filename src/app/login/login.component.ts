import { Component, OnInit } from '@angular/core';
import { AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario = '';
  password = '';
   
  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.login(this.usuario, this.password)
  }

  logout() {
    this.authService.logout();
  }

  public get logIn(): boolean {
    return this.authService.logIn;
  }
 
  ngOnInit() { }

}
