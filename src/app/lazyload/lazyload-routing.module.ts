import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadComponent } from './lazyload.component';


const routes: Routes = [

    { path: '', redirectTo: 'lazyload', pathMatch: 'full' },

    {   path: '',
        component: LazyloadComponent,
        children: [
            { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
            { path: 'first-page', loadChildren: () => import('../pages/first-page.module').then(m => m.FirstPageModule) },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule], // as rotas que criamos serão adicionadas no caminho principal da aplicação.
})

export class LazyloadRoutingsModule { }