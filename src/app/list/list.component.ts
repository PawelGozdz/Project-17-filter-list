import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemRepository } from '../model/item.repository';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
// This class provides a logic for the app-list
export class ListComponent implements OnInit {
  public selectedCategory = null;

  constructor(private repository: ItemRepository) { }

  get items(): Item[] {
    return this.repository.getItems(this.selectedCategory);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  ngOnInit() {
  }

}
