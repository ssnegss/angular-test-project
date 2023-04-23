import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiRootModule,
  TuiDialogModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { TuiInputModule, TuiTagModule } from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { ViewPageComponent } from './view-page.component';
import { AdditionalPopupModule } from '../../components/additionPopup/additionPopup.module';
import { TableModule } from '../../components/tableComponenet/table.module';
import { ItemService } from '../../services/ItemService';

@NgModule({
  declarations: [ViewPageComponent],
  imports: [TableModule],
  providers: [ItemService],
})
export class ViewPageModule {}
