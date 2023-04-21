import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { EditingPageModule } from './pages/editing-page/editing-page.module';
import { ViewPageModule } from './pages/view-page/view-page.module';

import { AppComponent } from './app.component';

import { ItemComponent } from './components/item/item.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, ButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditingPageModule,
    ViewPageModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
