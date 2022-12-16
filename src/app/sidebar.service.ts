import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  
  sidebarWidthChanged = new Subject<Number>();
  width: Number = 500;

  constructor() { }

  setWidth(width: Number) {
    this.width = width;
    this.sidebarWidthChanged.next(width);
  }
}
