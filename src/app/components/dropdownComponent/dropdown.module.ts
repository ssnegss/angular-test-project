import { NgModule } from '@angular/core';
import {
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
} from '@taiga-ui/core';

import { DropdownComponent } from './dropdown.component';
import { MoveItemsService } from '../../services/MoveItemsService';

@NgModule({
  declarations: [DropdownComponent],
  imports: [TuiButtonModule, TuiHostedDropdownModule, TuiDataListModule],
  providers: [MoveItemsService],
  exports: [DropdownComponent],
})
export class DropdownModule {}
