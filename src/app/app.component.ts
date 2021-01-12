import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diaz-practica04-front';

  show = false;

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.show = this.authService.logIn;
    if(this.show) {
      this.router.navigate(['/clientes']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  
}
