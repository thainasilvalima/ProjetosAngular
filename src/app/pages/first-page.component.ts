import { Component, OnInit } from "@angular/core";


@Component({

    selector: 'app-first-page',
    templateUrl: './first-page.component.html',
    styleUrls: ['./first-page.component.css']

})

export class FirstPageComponent{

    error = false;
    msg = 'Serviço ainda não foi chamado';
    simuladorEnvioServidor() {
        this.error = !this.error;
        if (this.error) {
            this.msg = ' Ocorreu um error com servidor'
        } else{
            this.msg = ' Tudo ok com servidor'
        }
    }

}