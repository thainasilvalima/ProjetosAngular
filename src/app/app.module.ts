import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({ //anotação que diz que uma classe representa um módulo.
  declarations: [ // um array contendo todas as classes que representa, componrnetes de nossa aplicação.
    AppComponent
  ],
  imports: [ // importamos outros módulos aqui, nesse caso imporando o módulo de suporte ao navegador (BrowserModule) que sempre será importado em uma aplicação web, e o AppRoutingModule, que é um módulo que nos foi criado quando dizemos que iremos utilizar as rotas do angular.
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
  ],
  providers: [], //um array dizendo quais são os serviços que criamos
  schemas: [ CUSTOM_ELEMENTS_SCHEMA], 
  bootstrap: [AppComponent] // diz que o componente será carregado juntamente com o módulo, assim que o módulo é carregado.
})
export class AppModule { }
