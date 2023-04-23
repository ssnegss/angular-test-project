import { Component, Input } from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'ItemComponent',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  item: IItem = {
    name: '',
    description: '',
    creationDate: new Date(),
    completionDate: new Date(),
  };
}
