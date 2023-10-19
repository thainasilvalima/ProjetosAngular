import { Component } from "@angular/core";


@Component({ 

    selector:'app-first-page',
    templateUrl: './first-page.component.html'

})

 export class FirstPageComponent{
   
    btnDisabled = false;
    name = 'teste de name'; 
     
    botaoClicado = false; 

    valores = [ {
        nome: 'nome'

    }];

    mostrarValor(){
        alert(this.name);
    }

    adicionar(){ this.valores.push({ nome: this.name}) }

    trocarBotao(){ this.botaoClicado = !this.botaoClicado;}

    items =[{name: 'teste'}, {name: 'teste2'}] // para cada valor na variavel items, cria uma nova com o nome item  
 }