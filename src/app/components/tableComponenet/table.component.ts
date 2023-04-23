import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemService } from '../../services/ItemService';
import { IItem } from '../../models/item';

@Component({
  selector: 'TableComponent',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableComponent {
  readonly columns = ['name', 'creationDate', 'completionDate', 'actions'];

  items: IItem[] = [];

  constructor(private ItemService: ItemService) {}

  ngOnInit() {
    this.items = this.ItemService.getItems();
  }

  remove(itemToRemove: IItem): void {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }
}
