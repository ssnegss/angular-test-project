import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdditionPopupComponent } from './additionPopup.component';
import { TuiInputDateTimeModule, TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [AdditionPopupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiInputDateTimeModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiInputModule,
  ],
  exports: [AdditionPopupComponent],
})
export class AdditionalPopupModule {}
