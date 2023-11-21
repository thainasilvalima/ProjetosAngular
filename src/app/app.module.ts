import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './pages/first-page.component';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai-page.component';
import { ClientListPage } from './pages/client-list-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { RXJSPageComponent } from './pages/rxjs-page-component';
import { OperatorExemploComponent } from './pages/operator-exemplo.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPessoaComponent } from './pages/lista-pessoas.component';
import { UserPageComponent } from './pages/user-page.component';

@NgModule({ //anotação que diz que uma classe representa um módulo.
  declarations: [ // um array contendo todas as classes que representa, componrnetes de nossa aplicação.
    AppComponent,
    FirstPageComponent,
    Filho1PageComponent,
    Filho2PageComponent,
    PaiPageComponent,
    ClientListPage,
    LoginPageComponent,
    RXJSPageComponent,
    OperatorExemploComponent,
    ListaPessoaComponent,
    UserPageComponent
  ],
  imports: [ // importamos outros módulos aqui, nesse caso imporando o módulo de suporte ao navegador (BrowserModule) que sempre será importado em uma aplicação web, e o AppRoutingModule, que é um módulo que nos foi criado quando dizemos que iremos utilizar as rotas do angular.
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [], //um array dizendo quais são os serviços que criamos
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent] // diz que o componente será carregado juntamente com o módulo, assim que o módulo é carregado.
})
export class AppModule { }
