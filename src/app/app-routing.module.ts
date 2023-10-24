import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiPageComponent } from './pages/pai-page.component';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { FirstPageComponent } from './pages/first-page.component';
import { ClientListPage } from './pages/client-list-page.component';
import { LoginPageComponent } from './pages/login-page.component';

const routes: Routes = [
  {path: 'first-page', component: FirstPageComponent},
  {path: 'client-list-page', component: ClientListPage },
  {path:''},
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
