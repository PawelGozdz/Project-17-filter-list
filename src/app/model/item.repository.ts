// Repository is responsible for delivering data to a specific app component

import { Injectable } from "@angular/core";
import { Item } from "./item.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ItemRepository {
  private items: Item[] = [];
  private categories: string[] = [];

  constructor(private data: StaticDataSource) {
    // subscribe() - Observabe method
    data.getItems().subscribe((results) => {
      this.items = results;
      this.categories = results.map(cat => cat.category)
        // filter 1 record for each category
        .filter((c, i, arr) => arr.indexOf(c) === i)
        .sort();
    });
  }
  getItems(category: string = null): Item[] {
    return this.items
      // filter categories. if no category passed, null is default and display all the items
      .filter(item => category === null || category === item.category);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
