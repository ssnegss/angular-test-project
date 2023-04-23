import { Injectable } from '@angular/core';

@Injectable()
export class MoveItemsService {
  constructor() {}

  moveUp(index: number, items: any[]) {
    if (index > 0) {
      const tmp = items[index];
      items[index] = items[index - 1];
      items[index - 1] = tmp;
    }
  }

  moveDown(index: number, items: any[]) {
    if (index < items.length - 1) {
      const tmp = items[index];
      items[index] = items[index + 1];
      items[index + 1] = tmp;
    }
  }
}
