import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDialogModule } from '@taiga-ui/core';

import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { TableComponent } from '../../components/tableComponenet/table.component';
import { DropdownModule } from '../dropdownComponent/dropdown.module';
import { MoveItemsService } from '../../services/MoveItemsService';
import { TuiButtonModule } from '@taiga-ui/core';
import { ViewInfoPopupModule } from '../viewInfoPopup/viewInfoPopup.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    DropdownModule,
    ViewInfoPopupModule,
    CommonModule,
    TuiDialogModule,
    TuiLetModule,
    TuiTableModule,
    TuiButtonModule,
  ],
  providers: [MoveItemsService],
  exports: [TableComponent],
})
export class TableModule {}
