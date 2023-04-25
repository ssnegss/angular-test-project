import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ItemService } from '../../services/ItemService';
import { IItem } from '../../models/item';

@Component({
  selector: 'editing-table-component',
  templateUrl: './editingTable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditingTableComponent {
  constructor(private ItemService: ItemService) {}

  readonly columns = [
    'name',
    'creationDate',
    'completionDate',
    'copyItem',
    'actions',
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

  copyItem(item: IItem) {
    this.ItemService.addItem(item);
  }

  nameFilter: string = '';
  dateFromFilter: string = '';
  dateToFilter: string = '';

  remove(itemToRemove: IItem): void {
    this.items = this.ItemService.removeItem(itemToRemove);
  }
}
