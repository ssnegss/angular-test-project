import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ButtonComponent',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiButtonComponent {
  @Input() buttonInner: string = "";
}
