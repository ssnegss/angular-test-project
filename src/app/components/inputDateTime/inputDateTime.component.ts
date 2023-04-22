import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'inputDateTime',
  templateUrl: './inputDateTime.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateTimeComponent {
  readonly testForm = new FormGroup({
    testValue: new FormControl([new TuiDay(2023, 1, 1), null]),
  });
}
