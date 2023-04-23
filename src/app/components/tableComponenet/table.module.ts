import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { TableComponent } from '../../components/tableComponenet/table.component';
import { DropdownModule } from '../dropdownComponent/dropdown.module';
import { MoveItemsService } from '../../services/MoveItemsService';

@NgModule({
  declarations: [TableComponent],
  imports: [DropdownModule, CommonModule, TuiLetModule, TuiTableModule],
  providers: [MoveItemsService],
  exports: [TableComponent],
})
export class TableModule {}
