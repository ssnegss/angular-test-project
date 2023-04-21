import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';

import { ViewPageComponent } from './view-page.component';
import { ButtonComponent } from '../../components/button/button.component';

@NgModule({
  declarations: [ViewPageComponent],
  imports: [FormsModule, TuiButtonModule],
  providers: [],
  bootstrap: [],
})
export class ViewPageModule {}
