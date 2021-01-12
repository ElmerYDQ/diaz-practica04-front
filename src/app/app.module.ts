import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { ClientesComponent } from './clientes/clientes.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './clientes/form.component';

import { ClienteService } from './clientes/cliente.service';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductosComponent } from './productos/productos.component';
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    ClientesComponent,
    FormComponent,
    LoginComponent,
    SidebarComponent,
    ProductosComponent,
    TipoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
