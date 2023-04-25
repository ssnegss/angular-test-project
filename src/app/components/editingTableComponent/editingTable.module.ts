import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDialogModule } from '@taiga-ui/core';

import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiTableModule } from '@taiga-ui/addon-table';
import {
  TuiInputDateTimeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';

import { EditingTableComponent } from './editingTable.component';
import { DropdownModule } from '../dropdownComponent/dropdown.module';
import { MoveItemsService } from '../../services/MoveItemsService';
import { TuiButtonModule } from '@taiga-ui/core';
import { ViewInfoPopupModule } from '../viewInfoPopup/viewInfoPopup.module';

@NgModule({
  declarations: [EditingTableComponent, 
  ],
  imports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiInputDateTimeModule,
    ViewInfoPopupModule,
    CommonModule,
    TuiDialogModule,
    TuiLetModule,
    TuiTableModule,
    TuiButtonModule,
  ],
  providers: [MoveItemsService],
  exports: [EditingTableComponent],
})
export class EditingTableModule {}
