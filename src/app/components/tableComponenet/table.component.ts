import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  readonly columns = ['move', 'name', 'creationDate', 'completionDate'];

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
}
