import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
} from '@taiga-ui/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EditingPageModule } from './pages/editing-page/editing-page.module';
import { ViewPageModule } from './pages/view-page/view-page.module';

import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
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
