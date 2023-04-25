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

  readonly columns = ['name', 'creationDate', 'completionDate', 'actions'];

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

  nameFilter: string = '';
  dateFromFilter: string = '';
  dateToFilter: string = '';

  // -- Дополнительно: удаление элемента из списка

  remove(itemToRemove: IItem): void {
    this.items = this.ItemService.removeItem(itemToRemove);
  }
}
