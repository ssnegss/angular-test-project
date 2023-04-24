import { Injectable } from '@angular/core';

@Injectable()
export class OpenViewInfoPopupService {
  private popupIsOpened: boolean = false;

  constructor() {}

  getState() {
    return this.popupIsOpened;
  }

  setState(state: boolean) {
    this.popupIsOpened = state;
  }
}
