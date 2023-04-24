import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IItem } from '../../models/item';
import { ItemService } from '../../services/ItemService';

@Component({
  selector: 'addition-popup-component',
  templateUrl: './additionPopup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionPopupComponent {
  constructor(private ItemService: ItemService) {}

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
    creationDateString: '',
    completionDateString: '',
  };

  open = false;

  showDialog(): void {
    this.open = true;
  }

  convertTuiTime = () => {
    const getDate = this.popupForm.controls.completionDateFieldForm;
    const getDay = getDate.value[0];
    const getTime = getDate.value[1];
    const inputCompletionDate = new Date(
      getDay.year,
      getDay.month,
      getDay.day,
      getTime.hours,
      getTime.minutes
    );
    return inputCompletionDate;
  };

  onSubmit() {
    const inputCompletionDate = this.convertTuiTime();

    const item: IItem = {
      name: this.popupForm.controls.nameFieldForm.value,
      description: this.popupForm.controls.descriptionFieldForm.value,
      creationDate: new Date(),
      completionDate: inputCompletionDate,
      creationDateString: '',
      completionDateString: '',
    };
    this.ItemService.addItem(item);
    this.popupForm.reset();
    console.log(item);
  }
}
