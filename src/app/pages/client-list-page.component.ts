import { Component } from "@angular/core";

@Component ({

    selector:'app-client-list-page',
    templateUrl: 'client-list-page.component.html',
})

export class ClientListPage{
    clients = ['Client 1, Client 2, Client 3']

}