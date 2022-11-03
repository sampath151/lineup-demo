import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'emptystate.component.html',
})
export class EmptystateComponent {

  constructor() { }


  html_code_Err = `
  &ltdiv class="col-md-6" style="margin:auto auto"&gt
  &ltdiv class="row"&gt
    &ltdiv class="col-md-9"&gt
     &lth4&gtOops! Page Not Found - 502&lt/h4&gt
     &ltp&gtThe page you were trying to reach could not be found. This could be because&lt/p&gt
     &ltul&gt
       &ltli&gtThe page does not exist.&lt/li&gt
       &ltli&gtThe page exists, but you do not have permission to view it.&lt/li&gt
     &lt/ul&gt
     &ltp&gtPlease visit our Help Center for help&lt/p&gt
     &ltbutton class="btn btn-primary"&gtaction&lt/button&gt
    &lt/div&gt
    &ltdiv class="col-md-3"&gt
      &ltimg src="../../../assets/img/common/error-page-icon.png" style="width:100%; height:auto" alt=""&gt
    &lt/div&gt
  &lt/div&gt
&lt/div&gt
  `;
  


  css_code_Err = `
  Regular Bootstrap rows and columns has been used!.
  `;

  java_codeappModuleTs = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
    
  import { AppComponent } from './app.component';
    
  import {NgBreadcrumbModule} from 'ng-breadcrumb';
     
  @NgModule({
    declarations: [
       AppComponent,
       TestComponent
    ],
    imports: [
      NgBreadcrumbModule,
    ],
    providers: [AlertConfig],
    bootstrap: [AppComponent]
 })
 export class AppModule { }
  `;

}

