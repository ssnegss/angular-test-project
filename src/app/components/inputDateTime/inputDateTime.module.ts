import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputDateTimeModule } from '@taiga-ui/kit';
import { InputDateTimeComponent } from './inputDateTime.component';

@NgModule({
  declarations: [InputDateTimeComponent],
  imports: [FormsModule, ReactiveFormsModule, TuiInputDateTimeModule],
  exports: [InputDateTimeComponent],
})
export class InputDateTimeModule {}
