import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewInfoPopupComponent } from './viewInfoPopup.component';
import { TuiInputDateTimeModule, TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [ViewInfoPopupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiInputDateTimeModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiInputModule,
  ],
  exports: [ViewInfoPopupComponent],
  providers: [],
})
export class ViewInfoPopupModule {}
