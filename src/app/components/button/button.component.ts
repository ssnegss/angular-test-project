import { Input, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() buttonInner: string = "";
}
