import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HelloWorld} from 'angular2-library-test2/components';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloWorld],
  bootstrap:    [ AppComponent]
})
export class AppModule {

}
