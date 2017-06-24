import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structural/header/header.component';
import { BreadcrumbComponent } from './components/structural/breadcrumb/breadcrumb.component';
import { PageInfoComponent } from './components/structural/page-info/page-info.component';
import { HelpInfoComponent } from './components/structural/help-info/help-info.component';
import { FooterComponent } from './components/structural/footer/footer.component';
import { UsersListComponent } from './components/functional/users-list/users-list.component';
import { UsersRegistrationComponent } from './components/functional/users-registration/users-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PageInfoComponent,
    HelpInfoComponent,
    FooterComponent,
    UsersListComponent,
    UsersRegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
