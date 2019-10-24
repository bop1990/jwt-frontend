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

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    //components
    AppComponent,
    LoginComponent,
    MenuComponent
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
    ButtonModule
  ],
  providers: [
    //servicos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
