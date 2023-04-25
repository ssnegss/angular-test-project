import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { IItem } from '../../models/item';
import { ItemService } from '../../services/ItemService';

@Component({
  selector: 'addition-popup-component',
  templateUrl: './additionPopup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionPopupComponent {
  popupIsOpened = false;

  popupForm = new FormGroup({
    nameFieldForm: new FormControl('', Validators.required),
    descriptionFieldForm: new FormControl('', Validators.required),
    completionDateFieldForm: new FormControl(),
  });

  constructor(private ItemService: ItemService) {
    this.popupForm.controls.completionDateFieldForm.setValidators([
      Validators.required,
      Validators.pattern(/^\d{2}.\d{2}.\d{4},\d{2}:\d{2}$/),
    ]);
  }

  newItem: IItem = {
    name: '',
    description: '',
    creationDate: new Date(),
    completionDate: new Date(),
    creationDateString: '',
    completionDateString: '',
  };

  showDialog(): void {
    this.popupIsOpened = true;
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

  convertDateToStr(Date: Date) {
    const DateString = moment(Date).format('YYYY-MM-DD HH:mm');
    return DateString;
  }

  onSubmit() {
    const inputCreationDate = new Date();
    const inputCompletionDate = this.convertTuiTime();
    const inputCreationDateString = this.convertDateToStr(inputCreationDate);
    const inputCompletionDateString =
      this.convertDateToStr(inputCompletionDate);

    const item: IItem = {
      name: this.popupForm.controls.nameFieldForm.value ?? '',
      description: this.popupForm.controls.descriptionFieldForm.value ?? '',
      creationDate: inputCreationDate,
      completionDate: inputCompletionDate,
      creationDateString: inputCreationDateString,
      completionDateString: inputCompletionDateString,
    };
    this.ItemService.addItem(item);
    this.popupForm.reset();
  }
}
