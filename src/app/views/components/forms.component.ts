import { Component } from '@angular/core';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  constructor() { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }


  selectedType='inputField';

  onChange(event) {
    console.log(event);
    this.selectedType = event;

  }
  


  html_code_B_Out = `
 &ltbutton type="button" class="btn btn-block btn-regular btn-primary"&gtPrimary &lt/button&gt
 &ltdiv class="material-textfield"&gt
 &ltinput placeholder="First Name " type="text"&gt
 &ltlabel&gtFirst Name&lt/label&gt
&lt/div&gt
  `;

  java_codeappModuleTs = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
    
  import { AppComponent } from './app.component';
    
  import { FormsModule } from '@angular/forms';
     
  @NgModule({
    declarations: [
       AppComponent,
       TestComponent
    ],
    imports: [
      FormsModule
    ],
    providers: [AlertConfig],
    bootstrap: [AppComponent]
 })
 export class AppModule { }
  `;



html_code_F_I = `


&ltdiv class="material-textfield"&gt
&ltinput placeholder="First Name " type="text"&gt
&ltlabel&gtFirst Name&lt/label&gt
&lt/div&gt


`;




css_code_F_I= `

.material-textfield {
  position: relative;  
  margin:5px 0;
  // min-width: 250px;
  // max-width: 350px;  
}


label {
  position: absolute;
  font-size: 1rem;
  left: 5px;
  top: 55%;
  transform: translateY(-50%);
  background-color: white;
  width:88%;
  color: #3c3c3c;
  // padding: 3px 0.3rem;
  padding:3px 0;
  margin: 0 0.5rem;
  transition: .1s ease-out;
  // width:55%;
  transform-origin: left top;
  pointer-events: none;
}
input {
  font-size: 1rem;
  width: 100%;
  outline: none;
  border: 1px solid $gray-500;
  border-radius: 5px;  
  padding: 1.4rem 0.7rem 0.5rem;
  color: gray;
  transition: 0.1s ease-out;
  
 
}
input:focus {
  border-color:$primary;  
}
input:focus + label {
  color: $primary;
  top: 30%;
  width:auto;
  font-size: 0.8rem;
  transform: translateY(-50%) scale(.9);
}
input:not(:placeholder-shown) + label {
  top: 30%;
  transform: translateY(-50%) scale(.9);
  width:auto;
  font-size: 0.8rem;
  color: $primary;
transition: 0.2s ease all;

}

option{
    background: chocolate;
    line-height: 23px;
}



`;







html_code_F_WI = `
&ltdiv class="material-textfield iconInput"&gt
&ltsvg class="icon"&gt
  &ltuse [attr.xlink:href]="'#approve'" /&gt
&lt/svg&gt
&ltinput placeholder="First Name " type="text"&gt
&ltlabel&gtFirst Name&lt/label&gt
&lt/div&gt
`;


css_code_F_WI= `

.material-textfield {
  position: relative;  
  margin:5px 0;
  // min-width: 250px;
  // max-width: 350px;  
}


.iconInput{
  .icon{
      float: left;
      margin: 0 0 0 10px;
      position: relative;
      top: 38px;
  }

label {
font-size: 1rem;
width: 100%;
outline: none;
// border: 1px solid #8f9ba6;
border-radius: 5px;
padding: 1.4rem 2.4rem 0.5rem;
color: gray;
transition: 0.1s ease-out;
position: absolute;
font-size: 1rem;
left: 30px;
top: 67%;
transform: translateY(-50%);
background-color: white;
width:75%;
color: #3c3c3c;
// padding: 3px 0.3rem;
padding:3px 0;
margin: 0 0.5rem;
transition: .1s ease-out;
// width:55%;
transform-origin: left top;
pointer-events: none;
}
input {
font-size: 1rem;
width: 100%;
outline: none;
border: 1px solid $gray-500;
border-radius: 5px;  
padding: 1.4rem 0.7rem 0.5rem 37px;
color: gray;
transition: 0.1s ease-out;


}
input:focus {
border-color:$primary;  
}
input:focus + label {
color: $primary;
top: 36px;
width:auto;
font-size: 0.8rem;
transform: translateY(-50%) scale(.9);
}
input:not(:placeholder-shown) + label {
top: 36px;
transform: translateY(-50%) scale(.9);
width:auto;
font-size: 0.8rem;
color: $primary;
transition: 0.2s ease all;

}

option{
background: chocolate;
line-height: 23px;
}


}
`;





html_code_F_EE = `
&ltdiv class="material-textfield errorInput"&gt
&ltsvg class="icon error-icon"&gt
&ltuse [attr.xlink:href]="'#lock'" /&gt
&lt/svg&gt
                             
&ltinput placeholder="First Name " type="text"&gt
&ltlabel&gtFirst Name&lt/label&gt
&lt/div&gt
`;


css_code_F_EE= `

.error-txt{
  color:$danger;
}


.errorInput{
  .error-icon{
      float: right!important;
      margin: 0 0 0 10px;
      position: relative;
      top: 38px;
      right:20px;
      fill:red;
  }

label {
font-size: 1rem;
width: 64%;
outline: none;
// border: 1px solid #8f9ba6;
border-radius: 5px;
padding: 1.4rem 2.4rem 0.5rem;
color: gray;
transition: 0.1s ease-out;
position: absolute;
font-size: 1rem;
left: 5px;
top: 69%;
transform: translateY(-50%);
background-color: white;
// width:75%;
color: #df5353;
// padding: 3px 0.3rem;
padding:3px 0;
margin: 0 0.5rem;
transition: .1s ease-out;
// width:55%;
transform-origin: left top;
pointer-events: none;
}
input {
font-size: 1rem;
width: 100%;
outline: none;
border: 1px solid $danger;
border-radius: 5px;  
padding: 1.4rem 0.7rem 0.5rem ;
color: #df5353;
transition: 0.1s ease-out;


}
input:focus {
border-color:$primary;  
}
input:focus + label {
color: $primary;
top: 36px;
width:auto;
font-size: 0.8rem;
transform: translateY(-50%) scale(.9);
}
input:not(:placeholder-shown) + label {
top: 36px;
transform: translateY(-50%) scale(.9);
width:auto;
font-size: 0.8rem;
color: $danger;
transition: 0.2s ease all;

}

option{
background: chocolate;
line-height: 23px;
}



}

.error-txt{
  color:$danger;
}
`;

html_code_F_RB = `

&ltdiv class="col-md-12 col-ls-12"&gt
&ltdiv class="radio"&gt
  &ltinput type="radio" name="radio" class="radio__input" checked&gt
  &ltlabel class="radio__label"&gtRadio 1&lt/label&gt
&lt/div&gt
&lt/div&gt
&ltdiv class="col-md-12 col-ls-12"&gt
&ltdiv class="radio"&gt
  &ltinput type="radio" name="radio" class="radio__input"&gt
  &ltlabel class="radio__label"&gtRadio 2&lt/label&gt
&lt/div&gt
&lt/div&gt
`;

css_code_F_RB= `

.radio {
  display: inline-block;
  position: relative;
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 24px;
  width:100%;
  height:30px;
  
  & input {
    position: absolute;
    top: -3px;
    left: 0;
    width: 200px;
    height: 25px;
    opacity: 0;
      z-index: 0;
  }
  
  & label {
      display: block;
      padding: 0 0 0 24px;
      cursor: pointer;
      font-size: 1rem!important;
      
      &:before {
          content: '';
          position: absolute;
          top: 4px;
          left: 0;
          width: 16px;
          height: 16px;
          background-color: transparent;
          border: 2px solid $border-color;
          border-radius: 14px;
          z-index: 1;
          transition: border-color 0.28s cubic-bezier(.4, 0, .2, 1);
      }
       
      &:after {
          content: '';
          position: absolute;
          top: 8px;
          left: 4px;
          width: 8px;
          height: 8px;
          background-color: $primary;
          border-radius: 50%;
          z-index: 2;
          transform: scale(0, 0);
          transition: transform 0.28s cubic-bezier(.4, 0, .2, 1);
      }
  }
  
  & input:checked + &__label {
      &:before {
          border-color: $primary;
      }
      
      &:after {
          transform: scale(1, 1);
      }
  }
}

`;



html_code_F_RB_D = `

&ltdiv class="radio"&gt
&ltinput type="radio" disabled name="radio" class="radio__input" &gt
&ltlabel class="radio__label"&gtRadio 1&lt/label&gt
&lt/div&gt
`;

css_code_F_RB_D= `

only add "disabled" word to radio button input tag

`;


html_code_F_CB = `

&ltdiv class="row"&gt
&ltdiv class="material-textfield"&gt
&ltdiv class="form-checkbox-area"&gt
&ltinput class="form-check-input" type="checkbox"  id="inlineCheckbox1" value="option1"&gt Option A
&lt/div&gt
&lt/div&gt
 &lt/div&gt
`;

css_code_F_CB= `
.form-checkbox-area{
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  input{
      width:auto;
      float: left;
      margin-right: 15px;
      margin-top:2px;
  }
}

`;


html_code_F_CB_D = `

&ltdiv class="row"&gt
&ltdiv class="material-textfield"&gt
&ltdiv class="form-checkbox-area"&gt
&ltinput class="form-check-input" disabled type="checkbox"  id="inlineCheckbox1" value="option1"&gt Option A
&lt/div&gt
&lt/div&gt
 &lt/div&gt
`;

css_code_F_CB_D= `
only add "disabled" word to radio button input tag

`;



html_code_F_SB = `

&ltdiv class="material-textfield col-lg-3"&gt
&ltdiv class="select"&gt
  &ltselect class="select-text select-dropdown" required&gt
    &ltoption value="" disabled selected&gt&lt/option&gt
    &ltoption value="0"&gtPlease select&lt/option&gt
    &ltoption value="1"&gtOption #1&lt/option&gt
    &ltoption value="2"&gtOption #2&lt/option&gt
    &ltoption value="3"&gtOption #3&lt/option&gt
  &lt/select&gt
  &ltspan class="select-highlight"&gt&lt/span&gt
  &ltspan class="select-bar"&gt&lt/span&gt
  &ltlabel class="select-label"&gtSelect&lt/label&gt
&lt/div&gt
&lt/div&gt
`;

css_code_F_SB= `
.select {
	position: relative;
    border-radius: 5px;
    width: 100%;
	height: 38px;
}

.select-text {
	position: relative;
    // background-color: transparent;
    background-color: #FFF;
	width:100%;
	font-weight:400;
    
    padding: 1.5rem 0.5rem 0.5rem;
	font-size: 15px;
}

/* Remove focus */
.select-text:focus {
    outline: none;
    border-color:$primary;  
	// border-bottom: 1px solid rgba(0,0,0, 0);
}

	/* Use custom arrow */
.select .select-text {
	appearance: none;
	-webkit-appearance:none
}

.select:after {
	position: absolute;
	top: 61%;
    right: 20px;
	/* Styling the down arrow */
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid rgba(0, 0, 0, 0.12);
	pointer-events: none;
}


/* LABEL ======================================= */
.select-label {
	// color: rgba(0,0,0, 0.26);



	font-size: 1rem;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 0;
	
    transition: .1s ease-out;
}

/* active state */
.select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
	// color: #2F80ED;
	top: 45%;
	transition: 0.2s ease all;
    font-size: 0.8rem;
    border-color:$primary;  
    color: $primary;
    transform: translateY(-50%) scale(.9);
    width:auto;
}

/* BOTTOM BARS ================================= */
.select-bar {
	position: relative;
	display: block;
	width: 350px;
}

.select-bar:before, .select-bar:after {
	content: '';
	height: 2px;
	width: 0;
	// bottom: 1px;
	position: absolute;
	// background: $primary;
	// transition: 0.2s ease all;
}

.select-bar:before {
	left: 50%;
}

.select-bar:after {
	right: 50%;
}

/* active state */
.select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
	width: 50%;
}

/* HIGHLIGHTER ================================== */
.select-highlight {
	position: absolute;
	display: none;
	height: 60%;
	width: 100px;
	bottom: 95%;
	left: 0;
	pointer-events: none;
	opacity: 0.5;
}


.select-wrapper .select-dropdown{
    position: relative;
    cursor: pointer;
    background-color: transparent;
    
    border-bottom: 1px solid $gray-500;
    outline: none;
    height: 3rem;
    line-height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
}
`;



html_code_F_SB_D = `

&ltdiv class="material-textfield inputDisabled"&gt
                          &ltdiv class="select"&gt
                            &ltselect class="select-text select-dropdown" disabled required&gt
                              &ltoption value="" disabled selected&gt&lt/option&gt
                              &ltoption value="0"&gtPlease select&lt/option&gt
                              &ltoption value="1"&gtOption #1&lt/option&gt
                              &ltoption value="2"&gtOption #2&lt/option&gt
                              &ltoption value="3"&gtOption #3&lt/option&gt
                            &lt/select&gt
                            &ltspan class="select-highlight"&gt&lt/span&gt
                            &ltspan class="select-bar"&gt&lt/span&gt
                            &ltlabel class="select-label"&gtSelect&lt/label&gt
                          &lt/div&gt
                          &lt/div&gt
`;

css_code_F_SB_D= `
.inputDisabled{
  label{
  color:#ababab;
  }
}
`;


html_code_F_ID = `


&ltdiv class="material-textfield inputDisabled "&gt
                            &ltinput   disabled="disabled" placeholder="First Name " type="text"&gt
                            &ltlabel&gtFirst Name&lt/label&gt
                          &lt/div&gt
`;


css_code_F_ID= `

.inputDisabled{
  label{
  color:#ababab;
  }
}
.pure-material-checkbox &gt input:disabled {
  opacity: 0;
}

.pure-material-checkbox &gt input:disabled + span {
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  cursor: initial;
}

.pure-material-checkbox &gt input:disabled + span::before {
  border-color: currentColor;
}

.pure-material-checkbox &gt input:checked:disabled + span::before,
.pure-material-checkbox &gt input:indeterminate:disabled + span::before {
  border-color: transparent;
  background-color: currentColor;
}


`;




}
