import { Component } from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'view-page',
  templateUrl: 'view-page.component.html',
})
export class ViewPageComponent {
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