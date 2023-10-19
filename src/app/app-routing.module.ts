import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page.component';

const routes: Routes = [

  {
    path: 'first-page', component: FirstPageComponent //pode-se testar a aplicação.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // as rotas que criamos serão adicionadas no caminho principal da aplicação.
})
export class AppRoutingModule { }
