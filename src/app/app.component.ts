import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IItem } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  viewPageButtonName: string = 'View Page';
  editPageButtonName: string = 'Edit Page';
}
