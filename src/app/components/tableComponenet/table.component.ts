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

  convertDateToStr(items: IItem[]) {
    for (let item in items) {
      const creationDate = items[item].creationDate;
      const completionDate = items[item].completionDate;
      items[item].creationDateString =
        moment(creationDate).format('YYYY-MM-DD HH:MM');
      items[item].completionDateString =
        moment(completionDate).format('YYYY-MM-DD HH:MM');
    }
  }

  ngOnInit() {
    this.items = this.ItemService.getItems();
    this.convertDateToStr(this.items);
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
