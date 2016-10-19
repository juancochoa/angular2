import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HelloWorld} from "./HelloWorld";
import {FormsModule} from "@angular/forms";
import {Welcome} from "../../welcome/components"

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ HelloWorld, Welcome],
  exports: [HelloWorld, Welcome],
  bootstrap:    [ HelloWorld]
})
export class HelloWorldModule {}
