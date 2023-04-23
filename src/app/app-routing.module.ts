import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditingPageComponent } from './pages/editing-page/editing-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';

const routes: Routes = [
  { path: 'edit', component: EditingPageComponent },
  { path: 'view', component: ViewPageComponent },

  { path: '**', redirectTo: 'view' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
