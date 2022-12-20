import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {fromEvent, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  display = true;
  items: MenuItem[] = [];
  mobileView: boolean = false;
  resizeObservable$: Observable<Event> = new Observable<Event>();
  resizeSubscription$: Subscription = new Subscription();

  dockItems: MenuItem[] = [];
  extended: boolean = true;

  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      this.display = !(window.innerWidth <= 900);
    });
    this.setupMenuItems();
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  private setupMenuItems() {
    this.items = [
      {
        label: 'Home',
        icon: "assets/images/dock/house-solid.svg"
      },
      {
        label: 'Calendar',
        icon: "assets/images/dock/calendar-days-solid.svg"
      },
      {
        label: 'Trainings',
        icon: "assets/images/dock/dumbbell-solid.svg"
      },
      {
        label: 'Progress',
        icon: "assets/images/dock/chart-line-solid.svg"
      },
      {
        label: 'Comments',
        icon: "assets/images/dock/comments-solid.svg"
      },
      {
        label: 'My Profile',
        icon: "assets/images/dock/user-solid.svg"
      },
      {
        label: 'Trainee',
        icon: "assets/images/dock/users-solid.svg"
      },
      {
        label: 'Settings',
        icon: "assets/images/dock/gear-solid.svg"
      }
    ];
  }


}
