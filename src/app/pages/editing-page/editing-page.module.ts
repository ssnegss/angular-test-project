import { NgModule } from '@angular/core';

import { EditingPageComponent } from './editing-page.component';
import { AdditionalPopupModule } from '../../components/additionPopup/additionPopup.module';
import { EditingTableModule } from '../../components/editingTableComponent/editingTable.module';

@NgModule({
  declarations: [EditingPageComponent],
  imports: [AdditionalPopupModule, EditingTableModule],
  providers: [],
  exports: [EditingPageComponent],
})
export class EditingPageModule {}
