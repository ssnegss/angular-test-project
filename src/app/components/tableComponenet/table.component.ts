import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ItemService } from '../../services/ItemService';
import { IItem } from '../../models/item';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  constructor(private ItemService: ItemService) {}

  readonly columns = [
    'move',
    'name',
    'creationDate',
    'completionDate',
    // 'actions',
  ];

  items: IItem[] = [];
  item: any;

  popupIsOpened = false;

  ngOnInit() {
    this.items = this.ItemService.getItems();
  }

  openDialog(item: IItem) {
    this.popupIsOpened = true;
    this.item = item;
  }

  // -- Дополнительно: удаление элемента из списка

  // remove(itemToRemove: IItem): void {
  //   this.items = this.items.filter((item) => item !== itemToRemove);
  // }
}
