import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import moment from 'moment';
import { IItem } from '../../models/item';

@Component({
  selector: 'additionPopupComponent',
  templateUrl: './additionPopup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionPopupComponent {
  popupForm = new FormGroup({
    nameFieldForm: new FormControl(),
    descriptionFieldForm: new FormControl(),
    completionDateFieldForm: new FormControl(),
  });

  newItem: IItem = {
    name: '',
    description: '',
    creationDate: new Date(),
    completionDate: new Date(),
  };

  open = false;

  showDialog(): void {
    this.open = true;
    // console.log(this.item);
  }

  onSubmit() {
    const item: IItem = {
      name: this.popupForm.controls.nameFieldForm.value,
      description: this.popupForm.controls.descriptionFieldForm.value,
      creationDate: new Date(),
      completionDate: this.popupForm.controls.completionDateFieldForm.value,
    };
    this.popupForm.reset();
    console.log(item);
  }
}
