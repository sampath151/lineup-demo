import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'breadcrumbs.component.html',
})
export class BreadcrumbsComponent {

  constructor() { }


  html_code_B_Out = `
  &ltdiv class="row"&gt
                                  &ltdiv class="col-md-12"&gt
                                    &ltul class="breadcrumb crums-overview"&gt
                                      &ltli class="breadcrumb-item "&gt&lta href="#"&gtHome&lt/a&gt&lt/li&gt
                                      &ltli class="breadcrumb-item "&gt&lta href="#"&gtPictures&lt/a&gt&lt/li&gt
                                      &ltli class="breadcrumb-item "&gt&lta href="#"&gtSummer 15&lt/a&gt&lt/li&gt
                                      &ltli class="breadcrumb-item active"&gtItaly&lt/li&gt
                                    &lt/ul&gt
                                  &lt/div&gt
                                &lt/div&gt
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

  css_code_A_r = `
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding:0.6rem 1rem 0.6rem;
    z-index: 1000;
    top:55px;
    margin-bottom: 0rem;
    list-style: none;
    @include border-radius($breadcrumb-border-radius);
    font-weight: 400;
    background:#EAEEF2;
    width:100%;
  
  
    a{color: black;}
  }
  
  
  .dark-mode {
    .breadcrumb {
    background:#000;
    }
  }
  
  
  
  
  
  .breadcrumb-item {
    + .breadcrumb-item {
      padding-left: $breadcrumb-item-padding;
      background: url(/assets/Icons/common/arrow-icon.svg) no-repeat;
      padding-left: 20px;
      margin-left: 10px;
      background-position: 2px;
      
  
      &::before {
        display: inline-block;
        padding-right: $breadcrumb-item-padding;
        color: $breadcrumb-divider-color;
  
    width:30px;
    height:30px;
    background:url('/assets/Icons/common/arrow-icon.svg') no-repeat;
        
      }
    }
  
    + .breadcrumb-item:hover::before {
      text-decoration: underline;
    }
    + .breadcrumb-item:hover::before {
      text-decoration: none;
    }
  
    &.active {
      color: $primary;
      font-weight: bold;
      background: url(/assets/Icons/common/arrow-icon.svg) no-repeat;
      padding-left: 20px;
      margin-left: 10px;
      background-position: 2px;
    }
  }


  `;

html_code_A_r = `

&ltdiv class="bs-example"&gt
                                      &ltdiv class="accordion" id="accordionExample"&gt
                                          &ltdiv class="accordian-content-area"&gt
                                              &ltdiv class="card-header" id="headingOne"&gt
                                                  &lth2 class="mb-0"&gt
                                                      &ltbutton type="button" class="btn btn-link col-lg-12" data-toggle="collapse" data-target="#collapseOne"&gtWhat is HTML? 
                                                        &ltsvg class="fa icon"&gt
                                                        &ltuse [attr.xlink:href]="'#down-arrow'" /&gt
                                                      &lt/svg&gt&lt/button&gt                 
                                                  &lt/h2&gt
                                              &lt/div&gt
                                              &ltdiv id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample"&gt
                                                  &ltdiv class="card-body"&gt
                                                      &ltp&gtHTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages. &lta href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank"&gtLearn more.&lt/a&gt&lt/p&gt
                                                  &lt/div&gt
                                              &lt/div&gt
                                          &lt/div&gt
                                          &ltdiv class="accordian-content-area"&gt
                                              &ltdiv class="card-header" id="headingTwo"&gt
                                                  &lth2 class="mb-0"&gt
                                                      &ltbutton type="button" class="btn btn-link col-lg-12 collapsed" data-toggle="collapse" data-target="#collapseTwo"&gt What is Bootstrap? 
                                                        &ltsvg class="fa icon"&gt
                                                          &ltuse [attr.xlink:href]="'#down-arrow'" /&gt
                                                        &lt/svg&gt
                                                      &lt/button&gt
                                                  &lt/h2&gt
                                              &lt/div&gt
                                              &ltdiv id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample"&gt
                                                  &ltdiv class="card-body"&gt
                                                      &ltp&gtBootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions. &lta href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank"&gtLearn more.&lt/a&gt&lt/p&gt
                                                  &lt/div&gt
                                              &lt/div&gt
                                          &lt/div&gt
                                          &ltdiv class="accordian-content-area"&gt
                                              &ltdiv class="card-header" id="headingThree"&gt
                                                  &lth2 class="mb-0"&gt
                                                      &ltbutton type="button" class="btn btn-link col-lg-12 collapsed" data-toggle="collapse" data-target="#collapseThree"&gt What is CSS? 
                                                        &ltsvg class="fa icon"&gt
                                                          &ltuse [attr.xlink:href]="'#down-arrow'" /&gt
                                                        &lt/svg&gt
                                                      &lt/button&gt                     
                                                  &lt/h2&gt
                                              &lt/div&gt
                                              &ltdiv id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample"&gt
                                                  &ltdiv class="card-body"&gt
                                                      &ltp&gtCSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. &lta href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank"&gtLearn more.&lt/a&gt&lt/p&gt
                                                  &lt/div&gt
                                              &lt/div&gt
                                          &lt/div&gt
                                      &lt/div&gt
                                  &lt/div&gt
`;


}

