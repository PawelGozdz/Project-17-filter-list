import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { ListComponent } from "./list.component";




@NgModule({
  // Browser and Forms modules contain Angular functions for workin with HTML forms
  imports: [ModelModule, BrowserModule, FormsModule],
  // Inform Angular about ListComponent
  declarations: [ListComponent],
  // Exports ListComponent module so it can be used in other places
  exports: [ListComponent]
})
export class ListModule { }