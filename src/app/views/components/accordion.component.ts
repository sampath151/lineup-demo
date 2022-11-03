import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'accordion.component.html',
})
export class AccordionComponent {

  constructor() { }
  // selectedType='RA';

  
  // onChange(event) {
  //   console.log(event);
  //   this.selectedType = event;

  // }


  html_code_B_Out = `
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
  `;

  java_codeappModuleTs = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
    
  import { AppComponent } from './app.component';
    
  import { AccordionModule } from 'ngx-bootstrap/accordion';
     
  @NgModule({
    declarations: [
       AppComponent,
       TestComponent
    ],
    imports: [
      AccordionModule,
    ],
    providers: [AlertConfig],
    bootstrap: [AppComponent]
 })
 export class AppModule { }
  `;

  css_code_A_r = `
  .accordion{
    width:100%;
    border:1px solid #ececec;
    a{text-decoration: none;}
    .header{
        padding:15px;
        background:#f7f7f7;
        color:#000;
    }
    .body{
        padding:25px 15px 15px;
    }
    .btn-link{
      text-align: left;
      text-decoration: none;
      font-weight: 300;
      color:#212121;
    }
    .card-header{
      padding:0.25rem 10px;
      background: #f9f9f9;
      border-top:1px solid #ececec;
      border-bottom: 1px solid #ececec;
    }
}




.table tr {
    cursor: pointer;
}
.table{
	background-color: #fff !important;
}
.hedding h1{
	color:#fff;
	font-size:25px;
}
.main-section{
	margin-top: 120px;
}
.hiddenRow {
    padding: 0 4px !important;
    background-color: #eeeeee;
    font-size: 13px;
}
.accordian-body span{
	color:#a2a2a2 !important;
}



.bs-example{
  margin: 20px;
  width:100%;
}
.accordion svg{
  // margin-right: 0.5rem;
  // float: right;;
  position: absolute;
  right:10px;
}

.accordian-content-area{
  background:#FFF;
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

