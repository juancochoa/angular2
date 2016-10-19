
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<input placeholder="..." (keyup)="onKeyUp(input)" #input>
               {{message}}
               <hello-world></hello-world>
               `})
export class AppComponent {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}
