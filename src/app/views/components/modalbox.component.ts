import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'modalbox.component.html',
})
export class ModalboxComponent {

  // &lt 
  // &gt



  name = "Angular";
  html_code = `
  &ltdiv class="modal-content col-md-6 col-lg-3 "&gt
  &lt!-- Modal Header --&gt
  &ltdiv class="modal-header"&gt
   &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
   &ltbutton type="button" class="close" data-dismiss="modal"&gt
   &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
   &lt/button&gt
 &lt/div&gt
 
 &lt!-- Modal body --&gt
 &ltdiv class="modal-body"&gt
  &ltp&gtEach component has been designed to work harmoniously together, as parts of a greater whole.&lt/p&gt
 &lt/div&gt
 
 &lt!-- Modal footer --&gt
 &ltdiv class="modal-footer"&gt
   &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
   &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
     Cancel
   &lt/button&gt
   &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
     Submit
   &lt/button&gt
 &lt/div&gt
   
 &lt/div&gt
  
`;


html_code_M = `
&ltdiv class="modal-content col-md-6 col-lg-6 "&gt
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
 &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
 &ltbutton type="button" class="close" data-dismiss="modal"&gt
 &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
 &lt/button&gt
&lt/div&gt

&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltp&gtEach component has been designed to work harmoniously together, as parts of a greater whole.&lt/p&gt
&lt/div&gt

&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
 &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
 &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
   Cancel
 &lt/button&gt
 &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
   Submit
 &lt/button&gt
&lt/div&gt
 
&lt/div&gt

`;

html_code_L = `
&ltdiv class="modal-content col-md-6 col-lg-8 "&gt
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
 &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
 &ltbutton type="button" class="close" data-dismiss="modal"&gt
 &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
 &lt/button&gt
&lt/div&gt

&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltp&gtEach component has been designed to work harmoniously together, as parts of a greater whole.&lt/p&gt
&lt/div&gt

&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
 &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
 &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
   Cancel
 &lt/button&gt
 &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
   Submit
 &lt/button&gt
&lt/div&gt
 
&lt/div&gt

`;

html_code_XL = `
&ltdiv class="modal-content col-md-12 col-lg-12 "&gt
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
 &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
 &ltbutton type="button" class="close" data-dismiss="modal"&gt
 &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
 &lt/button&gt
&lt/div&gt

&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltp&gtEach component has been designed to work harmoniously together, as parts of a greater whole.&lt/p&gt
&lt/div&gt

&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
 &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
 &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
   Cancel
 &lt/button&gt
 &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
   Submit
 &lt/button&gt
&lt/div&gt
 
&lt/div&gt

`;



html_code_T_M = `
&lt!------Button open ----&gt

&ltdiv class="" style="padding:30px; text-align:left;"&gt
Click here to view &ltbutton type="button" class="btn btn-primary" data-toggle="modal" data-target="#top_modal"&gtTop Modal &lti class="fa fa-angle-up pl-2"&gt&lt/i&gt&lt/button&gt

&lt/div&gt

&lt!------Button Close ----&gt

&ltdiv class="modal modal-top fade" id="top_modal" tabindex="-1" role="dialog" aria-labelledby="top_modal"&gt
  &ltdiv class="modal-dialog" role="document"&gt
    &ltdiv class="modal-content"&gt
      &ltdiv class="modal-header"&gt
        &lth5 class="modal-title"&gtTop Modal Title&lt/h5&gt
        &ltbutton type="button" class="close" data-dismiss="modal" aria-label="Close"&gt
          
          &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
        &lt/button&gt
      &lt/div&gt
      &ltdiv class="modal-body"&gt
        &ltp&gtAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.&lt/p&gt
      &lt/div&gt
      &ltdiv class="modal-footer modal-footer-fixed d-none"&gt
        &ltbutton type="button" class="btn btn-secondary" data-dismiss="modal"&gtClose&lt/button&gt
        &ltbutton type="button" class="btn btn-primary"&gtSave changes&lt/button&gt
      &lt/div&gt
    &lt/div&gt
  &lt/div&gt
&lt/div&gt
`;


css_code_T_M = `


.modal.modal-left .modal-dialog,
.modal.modal-right .modal-dialog,
.modal.modal-top .modal-dialog,
.modal.modal-bottom .modal-dialog {
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

.modal.modal-top .modal-dialog,
.modal.modal-bottom .modal-dialog {
  position: fixed;
  margin: auto;
  width: 100%;
  max-width: 100%;
  height: auto;
}
.modal.modal-top .modal-content,
.modal.modal-bottom .modal-content {
  height: auto;
  overflow-y: auto;
}

.modal.modal-top .modal-body,
.modal.modal-bottom .modal-body {
  padding: 15px 15px;
}

/* Top */

.modal.modal-top.fade .modal-dialog {
  top: -100%;
  -webkit-transition: opacity 0.3s linear, top 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, top 0.3s ease-out;
  -o-transition: opacity 0.3s linear, top 0.3s ease-out;
  transition: opacity 0.3s linear, top 0.3s ease-out;
}

.modal.modal-top.fade.show .modal-dialog {
  top: 0;
}
`;


html_code_B_M = `
&lt!------Button open ----&gt
&ltbutton type="button" class="btn btn-light border rounded-pill shadow-sm mb-1" data-toggle="modal" data-target="#bottom_modal"&gtBottom Modal &lti class="fa fa-angle-down pl-2"&gt&lt/i&gt&lt/button&gt

&lt!------Button Close ----&gt
&ltdiv class="modal modal-bottom fade" id="bottom_modal" tabindex="-1" role="dialog" aria-labelledby="bottom_modal"&gt
  &ltdiv class="modal-dialog" role="document"&gt
    &ltdiv class="modal-content"&gt
      &ltdiv class="modal-header"&gt
        &lth5 class="modal-title"&gtBottom Modal Title&lt/h5&gt
        &ltbutton type="button" class="close" data-dismiss="modal" aria-label="Close"&gt
        &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
        &lt/button&gt
      &lt/div&gt
      &ltdiv class="modal-body"&gt
        &ltp&gtAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.&lt/p&gt
      &lt/div&gt
      &ltdiv class="modal-footer modal-footer-fixed d-none"&gt
        &ltbutton type="button" class="btn btn-secondary" data-dismiss="modal"&gtClose&lt/button&gt
        &ltbutton type="button" class="btn btn-primary"&gtSave changes&lt/button&gt
      &lt/div&gt
    &lt/div&gt
  &lt/div&gt
&lt/div&gt
`;

css_code_B_M = `


.modal.modal-left .modal-dialog,
.modal.modal-right .modal-dialog,
.modal.modal-top .modal-dialog,
.modal.modal-bottom .modal-dialog {
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

.modal.modal-top .modal-dialog,
.modal.modal-bottom .modal-dialog {
  position: fixed;
  margin: auto;
  width: 100%;
  max-width: 100%;
  height: auto;
}

.modal.modal-top .modal-content,
.modal.modal-bottom .modal-content {
  height: auto;
  overflow-y: auto;
}

.modal.modal-top .modal-body,
.modal.modal-bottom .modal-body {
  padding: 15px 15px;
}

.modal.modal-bottom.fade .modal-dialog {
  bottom: -100%;
  -webkit-transition: opacity 0.3s linear, bottom 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, bottom 0.3s ease-out;
  -o-transition: opacity 0.3s linear, bottom 0.3s ease-out;
  transition: opacity 0.3s linear, bottom 0.3s ease-out;
}

.modal.modal-bottom.fade.show .modal-dialog {
  bottom: 0;
}

.modal.modal-bottom.fade .modal-dialog {
  bottom: -100%;
}


`;




html_code_R_M = `
&lt!------Button open ----&gt
&ltbutton type="button" class="btn btn-light border rounded-pill shadow-sm mb-1" data-toggle="modal" data-target="#right_modal"&gtRight Side Modal &lti class="fa fa-angle-right pl-2"&gt&lt/i&gt&lt/button&gt

&lt!------Button Close ----&gt
&ltdiv class="modal modal-right fade" id="right_modal" tabindex="-1" role="dialog" aria-labelledby="right_modal"&gt
  &ltdiv class="modal-dialog" role="document"&gt
    &ltdiv class="modal-content"&gt
      &ltdiv class="modal-header"&gt
        &lth5 class="modal-title"&gtRight Modal Title&lt/h5&gt
        &ltbutton type="button" class="close" data-dismiss="modal" aria-label="Close"&gt
        &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
        &lt/button&gt
      &lt/div&gt
      &ltdiv class="modal-body"&gt
        &ltp&gtYour body Text Here &lt/p&gt
      &lt/div&gt
      &ltdiv class="modal-footer modal-footer-fixed"&gt
        &ltbutton type="button" class="btn btn-secondary" data-dismiss="modal"&gtClose&lt/button&gt
        &ltbutton type="button" class="btn btn-primary"&gtSave changes&lt/button&gt
      &lt/div&gt
    &lt/div&gt
  &lt/div&gt
&lt/div&gt
`;
css_code_R_M = `


.modal.modal-left .modal-dialog,
.modal.modal-right .modal-dialog,
.modal.modal-top .modal-dialog,
.modal.modal-bottom .modal-dialog {
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

.modal.modal-left .modal-dialog,
.modal.modal-right .modal-dialog {
  position: fixed;
  margin: auto;
  width: 500px;
  max-width: 100%;
  height: 100%;
}
.modal.modal-left .modal-content,
.modal.modal-right .modal-content {
  height: 100%;
  overflow-y: auto;
}
.modal.modal-right.fade .modal-dialog {
  right: -500px;
  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
  -o-transition: opacity 0.3s linear, right 0.3s ease-out;
  transition: opacity 0.3s linear, right 0.3s ease-out;
}

.modal.modal-right.fade.show .modal-dialog {
  right: 0;
}

`;



html_code_L_M = `

&lt!------Button open ----&gt
&ltbutton type="button" class="btn btn-light border rounded-pill shadow-sm mb-1" data-toggle="modal" data-target="#left_modal"&gt&lti class="fa fa-angle-left pr-2"&gt&lt/i&gt Left Side Modal&lt/button&gt
&lt!------Button Close ----&gt
&ltdiv class="modal modal-left fade" id="left_modal" tabindex="-1" role="dialog" aria-labelledby="left_modal"&gt
  &ltdiv class="modal-dialog" role="document"&gt
    &ltdiv class="modal-content"&gt
      &ltdiv class="modal-header"&gt
        &lth5 class="modal-title"&gtLeft Modal Title&lt/h5&gt
        &ltbutton type="button" class="close" data-dismiss="modal" aria-label="Close"&gt
        &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
        &lt/button&gt
      &lt/div&gt
      &ltdiv class="modal-body"&gt
        &ltp&gtyout body text here&lt/p&gt
      &lt/div&gt
      &ltdiv class="modal-footer modal-footer-fixed"&gt
        &ltbutton type="button" class="btn btn-secondary" data-dismiss="modal"&gtClose&lt/button&gt
        &ltbutton type="button" class="btn btn-primary"&gtSave changes&lt/button&gt
      &lt/div&gt
    &lt/div&gt
  &lt/div&gt
&lt/div&gt


`;
css_code_L_M = `


.modal.modal-left .modal-dialog,
.modal.modal-right .modal-dialog,
.modal.modal-top .modal-dialog,
.modal.modal-bottom .modal-dialog {
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}


.modal.modal-left .modal-dialog,
.modal.modal-right .modal-dialog {
  position: fixed;
  margin: auto;
  width: 500px;
  max-width: 100%;
  height: 100%;
}

.modal.modal-left .modal-content,
.modal.modal-right .modal-content {
  height: 100%;
  overflow-y: auto;
}

.modal.modal-left .modal-body,
.modal.modal-right .modal-body {
  padding: 15px 15px 80px;
}

.modal.modal-left.fade .modal-dialog {
  left: -500px;
  -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
  -o-transition: opacity 0.3s linear, left 0.3s ease-out;
  transition: opacity 0.3s linear, left 0.3s ease-out;
}

.modal.modal-left.fade.show .modal-dialog {
  left: 0;
}
`;


html_code_M_Default_M = `
&ltdiv class="modal-content regular-model"&gt
        
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
 &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
 &ltbutton type="button" class="close" data-dismiss="modal"&gt
 &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
 &lt/button&gt
&lt/div&gt

&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltp&gtEach component has been designed to work harmoniously together, as parts of a greater whole.&lt/p&gt
&lt/div&gt

&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
 &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
 &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
   Cancel
 &lt/button&gt
 &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
   Submit
 &lt/button&gt
&lt/div&gt
 
&lt/div&gt
`;


css_code_M_Default_M = `

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; 
  color: $modal-content-color;
  pointer-events: auto;
  background-color: $modal-content-bg;
  background-clip: padding-box;
  border: $modal-content-border-width solid $modal-content-border-color;
  @include border-radius($modal-content-border-radius);
  @include box-shadow($modal-content-box-shadow-xs);
  // Remove focus outline from opened modal
  outline: 0;
}
.con-right-top-model{
    width:30%;
    float: right;
    right:0px;
    top:0px;
  }

`;


html_code_M_Bottom_M = `
&ltdiv class="modal-content bottom-model"&gt
        
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
 &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
 &ltbutton type="button" class="close" data-dismiss="modal"&gt
 &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
 &lt/button&gt
&lt/div&gt

&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltp&gtEach component has been designed to work harmoniously together, as parts of a greater whole.&lt/p&gt
&lt/div&gt

&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
 &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
 &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
   Cancel
 &lt/button&gt
 &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
   Submit
 &lt/button&gt
&lt/div&gt
 
&lt/div&gt
`;
css_code_M_Bottom_M = `

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; 
  color: $modal-content-color;
  pointer-events: auto;
  background-color: $modal-content-bg;
  background-clip: padding-box;
  border: $modal-content-border-width solid $modal-content-border-color;
  @include border-radius($modal-content-border-radius);
  @include box-shadow($modal-content-box-shadow-xs);
  // Remove focus outline from opened modal
  outline: 0;
}
.con-right-top-model{
    width:30%;
    float: right;
    right:0px;
    top:0px;
  }

`;





html_code_C_TL_M = `
&ltdiv class="modal-content con-left-top-model "&gt
        
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
  &lth3 class="modal-title"&gtHeading Left top&lt/h3&gt
  &ltbutton type="button" class="close" data-dismiss="modal"&gt
  &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
  
  &lt/button&gt
&lt/div&gt
                           
&lt!-- Modal body --&gt
  &ltdiv class="modal-body"&gt
    &ltdiv class="row"&gt
      &ltdiv class="col-sm-12"&gt
        &ltdiv class="material-textfield"&gt
          &ltinput placeholder="First Name " type="text"&gt
          &ltlabel&gtFirst Name&lt/label&gt
        &lt/div&gt
      &lt/div&gt
    &lt/div&gt
  &lt/div&gt
                           
 &lt!-- Modal footer --&gt
  &ltdiv class="modal-footer"&gt
    &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
    &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
       Cancel
    &lt/button&gt
    &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
       Submit
     &lt/button&gt
    &lt/div&gt
  &lt/div&gt
`;


html_code_C_TR_M = `
&ltdiv class="modal-content con-right-top-model "&gt
        
 &lt!-- Modal Header --&gt
 &ltdiv class="modal-header"&gt
&lth3 class="modal-title"&gtHeading Title&lt/h3&gt
&ltbutton type="button" class="close" data-dismiss="modal"&gt
&ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
&lt/button&gt
&lt/div&gt
                           
&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltdiv class="row"&gt
&ltdiv class="col-sm-12"&gt
&ltdiv class="material-textfield"&gt
&ltinput placeholder="First Name " type="text"&gt
&ltlabel&gtFirst Name&lt/label&gt
&lt/div&gt
                                
&lt/div&gt
&lt/div&gt
&lt/div&gt
                           
&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
&lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
&ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
Cancel
&lt/button&gt
&ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
Submit
&lt/button&gt
&lt/div&gt
                             
&lt/div&gt

`;

html_code_C_BR_M = `
&ltdiv class="modal-content con-right-bottom-model "&gt
        
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
 &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
 &ltbutton type="button" class="close" data-dismiss="modal"&gt
 &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
 &lt/button&gt
&lt/div&gt

&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltdiv class="row"&gt
  &ltdiv class="col-sm-12"&gt
    &ltdiv class="material-textfield"&gt
      &ltinput placeholder="First Name " type="text"&gt
      &ltlabel&gtFirst Name&lt/label&gt
    &lt/div&gt
    
  &lt/div&gt
&lt/div&gt
&lt/div&gt

&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
 &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
 &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
   Cancel
 &lt/button&gt
 &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
   Submit
 &lt/button&gt
&lt/div&gt
 
&lt/div&gt
`;

html_code_C_BL_M = `
&ltdiv class="modal-content con-left-bottom-model "&gt
        
&lt!-- Modal Header --&gt
&ltdiv class="modal-header"&gt
 &lth3 class="modal-title"&gtHeading Title&lt/h3&gt
 &ltbutton type="button" class="close" data-dismiss="modal"&gt&times;&lt/button&gt
&lt/div&gt

&lt!-- Modal body --&gt
&ltdiv class="modal-body"&gt
&ltdiv class="row"&gt
  &ltdiv class="col-sm-12"&gt
    &ltdiv class="material-textfield"&gt
      &ltinput placeholder="First Name " type="text"&gt
      &ltlabel&gtFirst Name&lt/label&gt
    &lt/div&gt
    
  &lt/div&gt
&lt/div&gt
&lt/div&gt

&lt!-- Modal footer --&gt
&ltdiv class="modal-footer"&gt
 &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
 &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
   Cancel
 &lt/button&gt
 &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
   Submit
 &lt/button&gt
&lt/div&gt
 
&lt/div&gt
`;




css_code_C_TL_M = `
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; 
  color: $modal-content-color;
  pointer-events: auto;
  background-color: $modal-content-bg;
  background-clip: padding-box;
  border: $modal-content-border-width solid $modal-content-border-color;
  @include border-radius($modal-content-border-radius);
  @include box-shadow($modal-content-box-shadow-xs);
  // Remove focus outline from opened modal
  outline: 0;
}

 .con-left-top-model{
    width:30%;
    float: left;
    margin:0px;
    left:0;
    top:0;
  }

`;


css_code_C_TR_M = `

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; 
  color: $modal-content-color;
  pointer-events: auto;
  background-color: $modal-content-bg;
  background-clip: padding-box;
  border: $modal-content-border-width solid $modal-content-border-color;
  @include border-radius($modal-content-border-radius);
  @include box-shadow($modal-content-box-shadow-xs);
  // Remove focus outline from opened modal
  outline: 0;
}
.con-right-top-model{
    width:30%;
    float: right;
    right:0px;
    top:0px;
  }

`;


css_code_C_BR_M = `
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; 
  color: $modal-content-color;
  pointer-events: auto;
  background-color: $modal-content-bg;
  background-clip: padding-box;
  border: $modal-content-border-width solid $modal-content-border-color;
  @include border-radius($modal-content-border-radius);
  @include box-shadow($modal-content-box-shadow-xs);
  // Remove focus outline from opened modal
  outline: 0;
}
.con-right-bottom-model{
    position: relative;
    bottom: -58px;
    width: 30%;
    float: right;
    right: 0;
  }



`;


css_code_C_BL_M = `
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; 
  color: $modal-content-color;
  pointer-events: auto;
  background-color: $modal-content-bg;
  background-clip: padding-box;
  border: $modal-content-border-width solid $modal-content-border-color;
  @include border-radius($modal-content-border-radius);
  @include box-shadow($modal-content-box-shadow-xs);
  // Remove focus outline from opened modal
  outline: 0;
}
.con-left-bottom-model{
    position: relative;
    bottom: -58px;
    width: 30%;
  }

`;


  css_code = `
  .model-box{
     background: #f1f1f1;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  }
  `;


  codeM = `
  export model = new Model test as different({
  a:1,
  b:function(){}
  })
`;

  java_codeM = `
  public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
  }
  `;


  codeL = `
  export model = new Model test as different({
  a:1,
  b:function(){}
  })
`;

  java_codeL = `
  public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
  }
  `;

  codeXl = `
  export model = new Model test as different({
  a:1,
  b:function(){}
  })
`;

  java_codeXl = `
  public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
  }
  `;
  java_codeappModuleTs = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
    
  import { AppComponent } from './app.component';
    
  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
     
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule, 
      NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;




  html_codeModel = `
  
  &lt!--Button---&gt
  &ltbutton type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"&gt
  Open modal
&lt/button&gt
&lt!--Button close---&gt

&lt!--Model popup---&gt
&ltdiv class="modal" id="myModal"&gt
  &ltdiv class="modal-dialog"&gt
    &ltdiv class="modal-content"&gt
    
      &lt!-- Modal Header --&gt
      &ltdiv class="modal-header"&gt
        &lth3 class="modal-title"&gtConfirmation Required&lt/h3&gt
        &ltbutton type="button" class="close" data-dismiss="modal"&gt
        &ltsvg class="icon"&gt &ltuse [attr.xlink:href]="'#close'" /&gt &lt/svg&gt
        &lt/button&gt
      &lt/div&gt
      
      &lt!-- Modal body --&gt
      &ltdiv class="modal-body"&gt
       &ltp&gt Popup When an organization is deactivated no user can login 
        to any Zenith UI. Are you sure to decativate the organization?&lt/p&gt
      &lt/div&gt
      
      &lt!-- Modal footer --&gt
      &ltdiv class="modal-footer"&gt
        &lt!-- &ltbutton type="button" class="btn btn-danger" data-dismiss="modal"&gtClose&lt/button&gt --&gt
        &ltbutton type="button" class="btn btn-light" data-dismiss="modal" &gt
          Cancel
        &lt/button&gt
        &ltbutton type="button" class="btn btn-primary" data-dismiss="modal" &gt
          Submit
        &lt/button&gt
      &lt/div&gt
      
    &lt/div&gt
  &lt/div&gt
&lt/div&gt
&lt!--Model popup close---&gt
  
`;




 

  constructor() { }
  
  selectedType='DMW';

  onChange(event) {
    // this.selectedType = event.target.value;
    this.selectedType = event;
  }

}

