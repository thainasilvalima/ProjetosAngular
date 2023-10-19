import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // as rotas que criamos serão adicionadas no caminho principal da aplicação.
})
export class AppRoutingModule { }
