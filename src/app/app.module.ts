import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion'; //accordion and accordion tab
import {TrainingComponent} from './training/training.component';
import {MenuModule} from "primeng/menu";
import {SidebarModule} from "primeng/sidebar";


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    AccordionModule,
    SidebarModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
