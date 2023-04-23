import { Injectable } from '@angular/core';
import { IItem } from '../models/item';

@Injectable()
export class ItemService {
  private items: IItem[] = [];

  constructor() {}

  getItems() {
    return this.items;
  }

  addItem(user: {
    name: string;
    description: string;
    creationDate: Date;
    completionDate: Date;
  }) {
    this.items.push(user);
  }
}
