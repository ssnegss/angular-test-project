import { NgModule } from '@angular/core';

import { EditingPageComponent } from './editing-page.component';
import { AdditionalPopupModule } from '../../components/additionPopup/additionPopup.module';

@NgModule({
  declarations: [EditingPageComponent],
  imports: [AdditionalPopupModule],
  providers: [],
  exports: [EditingPageComponent],
})
export class EditingPageModule {}
