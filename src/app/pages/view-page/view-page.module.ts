import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';

import { ViewPageComponent } from './view-page.component';
import { AdditionPopupComponent } from '../../components/additionPopup/additionPopup.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiRootModule, TuiDialogModule } from '@taiga-ui/core';

@NgModule({
  declarations: [ViewPageComponent, AdditionPopupComponent],
  imports: [
    FormsModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiRootModule,
    ReactiveFormsModule,
    TuiInputModule,
  ],
  providers: [],
})
export class ViewPageModule {}
