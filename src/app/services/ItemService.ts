import { Injectable } from '@angular/core';
import { IItem } from '../models/item';

@Injectable()
export class ItemService {
  private items: IItem[] = [];

  constructor() {}

  getItems() {
    return this.items;
  }

  addItem(item: {
    name: string;
    description: string;
    creationDate: Date;
    completionDate: Date;
    creationDateString: string;
    completionDateString: string;
  }) {
    this.items.push(item);
  }
}
