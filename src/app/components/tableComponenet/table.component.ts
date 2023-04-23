import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ItemService } from '../../services/ItemService';
import { IItem } from '../../models/item';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  constructor(private ItemService: ItemService) {}

  readonly columns = [
    'move',
    'name',
    'creationDate',
    'completionDate',
    'actions',
  ];

  items: IItem[] = [];
  dropdownOpen = false;

  ngOnInit() {
    this.items = this.ItemService.getItems();
  }

  remove(itemToRemove: IItem): void {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }
}
