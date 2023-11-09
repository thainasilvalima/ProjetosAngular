import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-login-page',
    template: `<form (ngSubmit) ="submit()"> 

    <label for="username"> Username
    </label>
    <input type="text">

    <label for="password"></label>
    <input type="password">
</form>

<button type="submit"> </button>

<router-outlet> </router-outlet>`
})

export class LoginPageComponent{

    user: any = {}

    error!:string 
    constructor(private router:Router){}

    submit() {
        if (this.user.username === 'admin' && this.user.password === '1234') {
            localStorage.setItem("logado" , "true");
            this.router.navigate(['/home'])
        }
        else{
            this.error = 'usuário e senha inválidos, tente admin 1234'
        }
    }
}