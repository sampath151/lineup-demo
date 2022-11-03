import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { GetstartModule } from './views/getstart/getstart.module';
// import { VendorModule} from './views/vendor/vendor.module';
import { SupportModule} from './views/support/support.module';

import { GuidelinesModule } from './views/guidelines/guidelines.module';
import { BestpracticesModule } from './views/bestpractices/bestpractices.module';
// import { UxbestlawsModule } from './views/bestpractice/uxbestlaws.module';
import { WhatsnewModule } from './views/whats-new/whatsnew.module';
import { ComponentModule } from './views/components/components.module';
import {RolesModule} from './views/roles/roles.module';
import { accessibilityModule } from './views/accessibility/accessibility.module';
import { FormsModule } from '@angular/forms';
import { FunctionalComponentModule } from './views/functionalcomponent/components.module';





// import {HttpClientModule} from '@angular/common/http';
// import {OAuthModule} from 'angular-oauth2-oidc';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { sidenavComponent} from './views/sidenav/sidenav.component';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@asgui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
// import { AboutComponent } from './views/getstart/about/about.component';
// import { InstallationComponent } from './views/getstart/installation/installation.component';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,SupportModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,FormsModule,
    GetstartModule,BestpracticesModule,accessibilityModule,RolesModule,
    GuidelinesModule,WhatsnewModule,ComponentModule,FunctionalComponentModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,sidenavComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
