import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//prime-ng
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { AuthGuard } from './services/auth/auth.guard';

//componentes
import { LoginComponent } from './paginas/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { Error404Component } from './paginas/error404/error404.component';
import { HomeComponent } from './paginas/home/home.component';


@NgModule({
  declarations: [
    //components
    AppComponent,
    LoginComponent,
    MenuComponent,
    PrincipalComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    //modulos
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PanelModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
    //servicos
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
