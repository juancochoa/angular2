
import {Component} from '@angular/core';

@Component({
    selector: 'welcome',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class Welcome {

    message = "Click Me ...";

    onClick() {
        this.message = "Welcome!";
        console.log(this.message);

    }

}
