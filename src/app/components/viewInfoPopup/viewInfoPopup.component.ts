import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IItem } from '../../models/item';
import { OpenViewInfoPopupService } from '../../services/OpenViewInfoPopupService';

@Component({
  selector: 'viewInfo-popup-component',
  templateUrl: './viewInfoPopup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewInfoPopupComponent {
  @Input() item: any;
  @Input() observer: any;

  viewInfoPopupForm = new FormGroup({
    viewNameFieldForm: new FormControl(),
    viewDescriptionFieldForm: new FormControl(),
    viewCreationDateFieldForm: new FormControl(),
    viewCompletionDateFieldForm: new FormControl(),
  });
}
