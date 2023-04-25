import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  currentId: number = 0;

  generateId(): number {
    return this.currentId++;
  }
}