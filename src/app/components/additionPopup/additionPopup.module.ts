import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdditionPopupComponent } from './additionPopup.component';
import { InputDateTimeModule } from '../inputDateTime/inputDateTime.module';
import { TuiInputDateTimeModule, TuiInputModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiRootModule,
  TuiDialogModule,
} from '@taiga-ui/core';

@NgModule({
  declarations: [AdditionPopupComponent],
  imports: [
    InputDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputDateTimeModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiRootModule,
    TuiInputModule,
  ],
  exports: [AdditionPopupComponent],
})
export class AdditionalPopupModule {}
