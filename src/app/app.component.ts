import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IItem } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular app';

  loginForm: IItem = {
    name: '',
    description: '',
    creationDate: new Date(),
    completionDate: new Date(),
  };

  printForm() {
    console.log(this.loginForm);
  }
}
