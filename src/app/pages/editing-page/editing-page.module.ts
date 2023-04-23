import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  TuiButtonModule,
  TuiRootModule,
  TuiDialogModule,
} from '@taiga-ui/core';
import { TuiInputModule, TuiTagModule } from '@taiga-ui/kit';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';

import { TuiTableExample2 } from '../../components/tableComponenet/table.component';
import { EditingPageComponent } from './editing-page.component';
import { AdditionalPopupModule } from '../../components/additionPopup/additionPopup.module';
import { ItemService } from '../../services/ItemService';

@NgModule({
  declarations: [EditingPageComponent, TuiTableExample2],
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
  bootstrap: [],
})
export class EditingPageModule {}
