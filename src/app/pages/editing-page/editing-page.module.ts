import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  TuiButtonModule,
  TuiRootModule,
  TuiDialogModule,
} from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';

import { EditingPageComponent } from './editing-page.component';
import { AdditionalPopupModule } from '../../components/additionPopup/additionPopup.module';

@NgModule({
  declarations: [EditingPageComponent],
  imports: [
    FormsModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiRootModule,
    ReactiveFormsModule,
    TuiInputModule,
    AdditionalPopupModule,
  ],
  providers: [],
  bootstrap: [],
})
export class EditingPageModule {}
