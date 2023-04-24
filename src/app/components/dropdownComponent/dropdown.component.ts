import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  Input,
} from '@angular/core';
import { IItem } from '../../models/item';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { MoveItemsService } from '../../services/MoveItemsService';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  constructor(private MoveItemsService: MoveItemsService) {}
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  @Input() itemsArr: IItem[] = [];
  @Input() itemsIndex: number = NaN;

  open = false;

  onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }

  moveUp() {
    this.MoveItemsService.moveUp(this.itemsIndex, this.itemsArr);
  }

  moveDown() {
    this.MoveItemsService.moveDown(this.itemsIndex, this.itemsArr);
  }
}
