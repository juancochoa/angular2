import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HelloWorldModule} from "../../../helloworld/modules"

@NgModule({
  imports:      [ BrowserModule, FormsModule, HelloWorldModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule {}
