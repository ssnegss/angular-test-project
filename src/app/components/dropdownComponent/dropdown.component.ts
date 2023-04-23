import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  Input,
} from '@angular/core';
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

  @Input() itemsArr: [] = [];
  @Input() itemsIndex: number = NaN;

  readonly items = ['Up', 'Down'];

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
