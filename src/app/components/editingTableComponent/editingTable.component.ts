import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemService } from '../../services/ItemService';
import { IdGeneratorService } from '../../services/IdGeneratorService';
import { IItem } from '../../models/item';

@Component({
  selector: 'editing-table-component',
  templateUrl: './editingTable.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EditingTableComponent {
  constructor(
    private ItemService: ItemService,
    private idGenerator: IdGeneratorService
  ) {}

  items: IItem[] = [];
  item: any;

  ngOnInit() {
    this.items = this.ItemService.getItems();
  }

  copyItem(item: IItem) {
    const copiedItem = Object.assign({}, item, {
      id: this.idGenerator.generateId(),
    });
    this.ItemService.addItem(copiedItem);
  }

  remove(itemToRemove: IItem): void {
    this.items = this.ItemService.removeItem(itemToRemove);
  }
}
