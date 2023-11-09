import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiPageComponent } from './pages/pai-page.component';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { ClientListPage } from './pages/client-list-page.component';
import { RXJSPageComponent } from './pages/rxjs-page-component';
import { OperatorExemploComponent } from './pages/operator-exemplo.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page.component';

const routes: Routes = [
  {path: 'app-component', component: AppComponent},
  {path: 'client-list-page', component: ClientListPage},
  {path:'app-rxjs-page', component: RXJSPageComponent},
  {path: 'app-operator-exemplo', component: OperatorExemploComponent},
  {path: 'app-login-page', component: LoginPageComponent},
  {
    path: 'pai', component: PaiPageComponent,
    children: [
      { path: 'filho1', component: Filho1PageComponent },
      { path: 'filho2', component: Filho2PageComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // as rotas que criamos serão adicionadas no caminho principal da aplicação.
})
export class AppRoutingModule { }
