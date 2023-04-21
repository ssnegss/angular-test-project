import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditingPageComponent } from './pages/editing-page/editing-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';

import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    EditingPageComponent,
    ViewPageComponent,
    ItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
