import { SidebarModule } from 'primeng/sidebar';
import { SidebarService } from './sidebar.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  display = false;
  width = 500;
  
  @ViewChild('sidenav', {static: false}) 
  sidenav!: ElementRef;

  constructor(private sidebarService: SidebarService) {
  }

  ngAfterViewInit(): void {
    console.log('DOM property value 1: ' + this.sidenav.nativeElement);
  }

  getDOMPropertyValue(): any {
    this.display = true;
  }

  print(): any {
    console.log('DOM property value 2: ' + this.sidenav.nativeElement);
  }

  

}
