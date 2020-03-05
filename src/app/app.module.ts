import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routeComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotificationComponent } from './shared/notification/notification.component';

@NgModule({
  declarations: [AppComponent, routeComponents, AdminLayoutComponent, NotificationComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
