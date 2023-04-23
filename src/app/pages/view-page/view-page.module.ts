import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiRootModule,
  TuiDialogModule,
} from '@taiga-ui/core';
import { TuiInputModule, TuiTagModule } from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { ViewPageComponent } from './view-page.component';
import { TuiTableComponent } from '../../components/tableComponenet/table.component';
import { AdditionalPopupModule } from '../../components/additionPopup/additionPopup.module';
import { ItemService } from '../../services/ItemService';

@NgModule({
  declarations: [ViewPageComponent, TuiTableComponent],
  imports: [
    FormsModule,
    TuiButtonModule,
    CommonModule,
    TuiDialogModule,
    TuiLetModule,
    TuiRootModule,
    ReactiveFormsModule,
    TuiInputModule,
    AdditionalPopupModule,
    TuiTableModule,
    TuiTagModule,
  ],
  providers: [ItemService],
})
export class ViewPageModule {}
