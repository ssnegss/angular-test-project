import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'additionPopupComponent',
  templateUrl: './additionPopup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionPopupComponent {
  exampleForm = new FormGroup({
    exampleControl: new FormControl(''),
  });

  open = false;

  showDialog(): void {
    this.open = true;
  }
}
