import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  // filtersForm = new FormGroup({
  //   nameFilter: new FormControl(''),
  //   dateFromFilter: new FormControl(''),
  //   dateToFilter: new FormControl(''),
  // });

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
    console.log(this.nameFilter);
    console.log(this.dateFromFilter);
    console.log(this.dateToFilter);
  }

  nameFilter: string = '';
  dateFromFilter: string = '';
  dateToFilter: string = '';

  // -- Дополнительно: удаление элемента из списка

  // remove(itemToRemove: IItem): void {
  //   this.items = this.items.filter((item) => item !== itemToRemove);
  // }
}
