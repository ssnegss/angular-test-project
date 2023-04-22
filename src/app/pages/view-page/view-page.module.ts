import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';

import { ViewPageComponent } from './view-page.component';
import { AdditionalPopupModule } from '../../components/additionPopup/additionPopup.module';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiRootModule, TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [ViewPageComponent],
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
})
export class ViewPageModule {}
