import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdditionPopupComponent } from './additionPopup.component';
import { TuiInputDateTimeModule, TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AdditionPopupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TuiInputDateTimeModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiInputModule,
  ],
  exports: [AdditionPopupComponent],
})
export class AdditionalPopupModule {}
