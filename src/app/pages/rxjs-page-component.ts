import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({

    selector: 'app-rxjs-page',
    templateUrl: './rxjs-page.component.html'
})

export class RXJSPageComponent implements OnInit {

    items: Array<string> = []

    Observable = of('item 1')

    constructor() { }

    ngOnInit() {
        this.Observable.subscribe((item) => {
            this.items.push(item);

        })

    }
}