import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemService } from '../../services/ItemService';
import { IdGeneratorService } from '../../services/IdGeneratorService';
import { IItem } from '../../models/item';

@Component({
  selector: 'editing-table-component',
  templateUrl: './editingTable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditingTableComponent {
  constructor(
    private ItemService: ItemService,
    private idGenerator: IdGeneratorService
  ) {}

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
    const copiedItem = Object.assign({}, item, {
      id: this.idGenerator.generateId(),
    });
    this.ItemService.addItem(copiedItem);
  }

  nameFilter: string = '';
  dateFromFilter: string = '';
  dateToFilter: string = '';

  remove(itemToRemove: IItem): void {
    this.items = this.ItemService.removeItem(itemToRemove);
  }
}
