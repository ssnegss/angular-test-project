import { Injectable } from '@angular/core';
import { IItem } from '../models/item';

@Injectable()
export class ItemService {
  private items: IItem[] = [];

  getItems() {
    return this.items;
  }

  addItem(item: {
    id: number;
    name: string;
    description: string;
    creationDate: Date;
    completionDate: Date;
    creationDateString: string;
    completionDateString: string;
  }) {
    this.items.unshift(item);
  }

  removeItem(removeItem: {
    id: number;
    name: string;
    description: string;
    creationDate: Date;
    completionDate: Date;
    creationDateString: string;
    completionDateString: string;
  }) {
    this.items = this.items.filter((item) => item.id !== removeItem.id);
    return this.items;
  }
}
