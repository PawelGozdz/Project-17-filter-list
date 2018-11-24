import { NgModule } from "@angular/core";
import { ItemRepository } from "./item.repository";
import { StaticDataSource } from "./static.datasource";


@NgModule({
  // Providers tells Angular, which classes whould be used as a service for @Injectable()
  providers: [ItemRepository, StaticDataSource]
})
export class ModelModule { }