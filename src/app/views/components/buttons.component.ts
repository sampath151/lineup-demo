import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'buttons.component.html',
})
export class ButtonsComponent {

  constructor() { }
  selectedType='stbBtn';

  
  onChange(event) {
    console.log(event);
    // this.selectedType = event.target.value;
    this.selectedType = event;
    // this.selectedType = event.target.href;

  }

  html_code_B_Out = `
 &ltbutton type="button" class="btn btn-block btn-regular btn-primary"&gtPrimary &lt/button&gt
  `;

  java_codeappModuleTs = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
    
  import { AppComponent } from './app.component';
    
  import { ButtonsModule } from 'ngx-bootstrap/buttons';
     
  @NgModule({
    declarations: [
       AppComponent,
       TestComponent
    ],
    imports: [
       ButtonsModule,
    ],
    providers: [AlertConfig],
    bootstrap: [AppComponent]
 })
 export class AppModule { }
  `;



html_code_B_D = `



&lt!------Primary Button-----&gt

&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-primary"&gtPrimary&lt/button&gt
&lt/div&gt

&lt!------Secondary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-outline-primary"&gtSecondary&lt/button&gt
&lt/div&gt

&lt!------tertiary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-tertiary"&gtTertiary&lt/button&gt
&lt/div&gt

&lt!------Ghost Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-ghost"&gtGhost&lt/button&gt
&lt/div&gt

&lt!------Link Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-link"&gtLink&lt/button&gt
&lt/div&gt

&lt!------success Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-success"&gtSuccess&lt/button&gt
&lt/div&gt

&lt!------Warning Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-warning"&gtWarning&lt/button&gt
&lt/div&gt

&lt!------Danger Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-danger"&gtDanger&lt/button&gt
&lt/div&gt

&lt!------Info Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-info"&gtInfo&lt/button&gt
&lt/div&gt

&lt!------Light Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-light"&gtLight&lt/button&gt
&lt/div&gt

&lt!------Dark Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-regular btn-dark"&gtDark&lt/button&gt
&lt/div&gt

`;




css_code_B_D= `
.btn {
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: $btn-font-weight;
  color: $body-color;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: $btn-border-width solid transparent;
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);
  @include transition($btn-transition);

  @include hover {
    color: $body-color;
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    @include box-shadow(none);
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    @include box-shadow($btn-active-box-shadow);

    &:focus {
      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
    }
  }
}


a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}


//
// Alternate buttons
//

@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include button-variant($value, $value);
  }
}

@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}


//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal;
  color: $link-color;
  text-decoration: $link-decoration;

  @include hover {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
    pointer-events: none;
  }

  // No need for an active state here
}


//
// Button Sizes
//

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
}


//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

`;





html_code_B_S = `

&lt!------Primary Button-----&gt

&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-primary"&gtPrimary&lt/button&gt
&lt/div&gt

&lt!------Secondary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-outline-primary"&gtSecondary&lt/button&gt
&lt/div&gt

&lt!------tertiary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-tertiary"&gtTertiary&lt/button&gt
&lt/div&gt

&lt!------Ghost Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-ghost"&gtGhost&lt/button&gt
&lt/div&gt

&lt!------Link Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-link"&gtLink&lt/button&gt
&lt/div&gt

&lt!------success Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-success"&gtSuccess&lt/button&gt
&lt/div&gt

&lt!------Warning Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-warning"&gtWarning&lt/button&gt
&lt/div&gt

&lt!------Danger Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-danger"&gtDanger&lt/button&gt
&lt/div&gt

&lt!------Info Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-info"&gtInfo&lt/button&gt
&lt/div&gt

&lt!------Light Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-light"&gtLight&lt/button&gt
&lt/div&gt

&lt!------Dark Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-small btn-dark"&gtDark&lt/button&gt
&lt/div&gt

`;





css_code_B_S= `
.btn-small{
  padding:5px 20px!important;
}


.btn {
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: $btn-font-weight;
  color: $body-color;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: $btn-border-width solid transparent;
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);
  @include transition($btn-transition);

  @include hover {
    color: $body-color;
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    @include box-shadow(none);
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    @include box-shadow($btn-active-box-shadow);

    &:focus {
      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
    }
  }
}


a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}


//
// Alternate buttons
//

@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include button-variant($value, $value);
  }
}

@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}


//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal;
  color: $link-color;
  text-decoration: $link-decoration;

  @include hover {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
    pointer-events: none;
  }

  // No need for an active state here
}


//
// Button Sizes
//

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
}


//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

`;






html_code_B_L = `

&lt!------Primary Button-----&gt

&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-primary"&gtPrimary&lt/button&gt
&lt/div&gt

&lt!------Secondary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-outline-primary"&gtSecondary&lt/button&gt
&lt/div&gt

&lt!------tertiary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-tertiary"&gtTertiary&lt/button&gt
&lt/div&gt

&lt!------Ghost Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-ghost"&gtGhost&lt/button&gt
&lt/div&gt

&lt!------Link Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-link"&gtLink&lt/button&gt
&lt/div&gt

&lt!------success Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-success"&gtSuccess&lt/button&gt
&lt/div&gt

&lt!------Warning Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-warning"&gtWarning&lt/button&gt
&lt/div&gt

&lt!------Danger Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-danger"&gtDanger&lt/button&gt
&lt/div&gt

&lt!------Info Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-info"&gtInfo&lt/button&gt
&lt/div&gt

&lt!------Light Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-light"&gtLight&lt/button&gt
&lt/div&gt

&lt!------Dark Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-large btn-dark"&gtDark&lt/button&gt
&lt/div&gt

`;





css_code_B_L= `
.btn-large{
  padding:20px 20px!important;
}



.btn {
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: $btn-font-weight;
  color: $body-color;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: $btn-border-width solid transparent;
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);
  @include transition($btn-transition);

  @include hover {
    color: $body-color;
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    @include box-shadow(none);
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    @include box-shadow($btn-active-box-shadow);

    &:focus {
      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
    }
  }
}


a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}


//
// Alternate buttons
//

@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include button-variant($value, $value);
  }
}

@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}


//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal;
  color: $link-color;
  text-decoration: $link-decoration;

  @include hover {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
    pointer-events: none;
  }

  // No need for an active state here
}


//
// Button Sizes
//

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
}


//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

`;





html_code_B_FW = `

&lt!------Primary Button-----&gt

&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-primary"&gtPrimary&lt/button&gt
&lt/div&gt

&lt!------Secondary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-outline-primary"&gtSecondary&lt/button&gt
&lt/div&gt

&lt!------tertiary Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-tertiary"&gtTertiary&lt/button&gt
&lt/div&gt

&lt!------Ghost Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-ghost"&gtGhost&lt/button&gt
&lt/div&gt

&lt!------Link Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-link"&gtLink&lt/button&gt
&lt/div&gt

&lt!------success Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-success"&gtSuccess&lt/button&gt
&lt/div&gt

&lt!------Warning Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-warning"&gtWarning&lt/button&gt
&lt/div&gt

&lt!------Danger Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-danger"&gtDanger&lt/button&gt
&lt/div&gt

&lt!------Info Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-info"&gtInfo&lt/button&gt
&lt/div&gt

&lt!------Light Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-light"&gtLight&lt/button&gt
&lt/div&gt

&lt!------Dark Button-----&gt
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
&ltbutton type="button" class="btn btn-block btn-dark"&gtDark&lt/button&gt
&lt/div&gt

`;





css_code_B_FW= `
.btn-large{
  padding:20px 20px!important;
}



.btn {
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: $btn-font-weight;
  color: $body-color;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: $btn-border-width solid transparent;
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);
  @include transition($btn-transition);

  @include hover {
    color: $body-color;
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    @include box-shadow(none);
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    @include box-shadow($btn-active-box-shadow);

    &:focus {
      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
    }
  }
}


a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}


//
// Alternate buttons
//

@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include button-variant($value, $value);
  }
}

@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}


//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal;
  color: $link-color;
  text-decoration: $link-decoration;

  @include hover {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
    pointer-events: none;
  }

  // No need for an active state here
}


//
// Button Sizes
//

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
}


//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

`;





html_code_B_WI = `


&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block btn-regular btn-primary"&gt 
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt &nbsp;
                              Primary&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block btn-regular btn-outline-primary"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              secondary&lt/button&gt
                          &lt/div&gt

                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block btn-regular btn-tertiary"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              tertiary&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-ghost"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              Ghost&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-link"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              Link&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-success"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              success&lt/button&gt
                          &lt/div&gt
                         
                         
                        &lt/div&gt
                        &ltdiv class="divider-50"&gt&lt/div&gt
                        &ltdiv class="row "&gt
                           
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-warning"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              Warning&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-danger"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              Danger&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-info"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              Info&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-light"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              Light&lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-dark"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              Dark&lt/button&gt
                          &lt/div&gt
                          

`;





css_code_B_WI= `

.btn-primary{
  .icon{
    fill: #FFF !important;
  }
  
}

.btn-primary:hover{
  .icon{
    fill: #FFF !important;
  }
  
}

.btn-outline-primary{
  .icon{
    fill: #133099 !important;
  }
}
.btn-outline-primary:hover{
  .icon{
    fill:#FFF !important;
  }
}
.btn-tertiary{
  .icon{
    fill: #000 !important;
  }
}
.btn-ghost{
  .icon{
    fill: #000 !important;
  }
}
.btn-link{
  .icon{
    fill: #000 !important;
  }
}


.btn-success{
  .icon{
    fill: #FFF !important;
  }
}


.btn-warning{
  .icon{
    fill: #000 !important;
  }
}

.btn-danger{
  .icon{
    fill: #FFF !important;
  }
}

.btn-info{
  .icon{
    fill: #000 !important;
  }
}

.btn-light{
  .icon{
    fill: #000 !important;
  }
}

.btn-dark{
  .icon{
    fill: #FFF !important;
  }
}



.btn {
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: $btn-font-weight;
  color: $body-color;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: $btn-border-width solid transparent;
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);
  @include transition($btn-transition);

  @include hover {
    color: $body-color;
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    @include box-shadow(none);
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    @include box-shadow($btn-active-box-shadow);

    &:focus {
      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
    }
  }
}


a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}


//
// Alternate buttons
//

@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include button-variant($value, $value);
  }
}

@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}


//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal;
  color: $link-color;
  text-decoration: $link-decoration;

  @include hover {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
    pointer-events: none;
  }

  // No need for an active state here
}


//
// Button Sizes
//

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
}


//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

`;







html_code_B_OI = `


&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn  btn-regular btn-primary"&gt 
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt 
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-regular btn-outline-primary"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
  
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn  btn-regular btn-tertiary"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn  btn-regular btn-ghost"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-regular btn-link"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn  btn-regular btn-success"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                         
                            
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-regular btn-warning"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn   btn-regular btn-danger"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-regular btn-info"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-regular btn-light"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          
                          &ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
                            &ltbutton type="button" class="btn btn-block  btn-regular btn-dark"&gt
                              &ltsvg class="icon"&gt
                                &ltuse [attr.xlink:href]="'#approve'" /&gt
                              &lt/svg&gt
                              &lt/button&gt
                          &lt/div&gt
                          

`;





css_code_B_OI= `

.btn-primary{
  .icon{
    fill: #FFF !important;
  }
  
}

.btn-primary:hover{
  .icon{
    fill: #FFF !important;
  }
  
}

.btn-outline-primary{
  .icon{
    fill: #133099 !important;
  }
}
.btn-outline-primary:hover{
  .icon{
    fill:#FFF !important;
  }
}
.btn-tertiary{
  .icon{
    fill: #000 !important;
  }
}
.btn-ghost{
  .icon{
    fill: #000 !important;
  }
}
.btn-link{
  .icon{
    fill: #000 !important;
  }
}


.btn-success{
  .icon{
    fill: #FFF !important;
  }
}


.btn-warning{
  .icon{
    fill: #000 !important;
  }
}

.btn-danger{
  .icon{
    fill: #FFF !important;
  }
}

.btn-info{
  .icon{
    fill: #000 !important;
  }
}

.btn-light{
  .icon{
    fill: #000 !important;
  }
}

.btn-dark{
  .icon{
    fill: #FFF !important;
  }
}



.btn {
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: $btn-font-weight;
  color: $body-color;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: $btn-border-width solid transparent;
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);
  @include transition($btn-transition);

  @include hover {
    color: $body-color;
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    @include box-shadow(none);
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    @include box-shadow($btn-active-box-shadow);

    &:focus {
      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
    }
  }
}


a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}


//
// Alternate buttons
//

@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include button-variant($value, $value);
  }
}

@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}


//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal;
  color: $link-color;
  text-decoration: $link-decoration;

  @include hover {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
    pointer-events: none;
  }

  // No need for an active state here
}


//
// Button Sizes
//

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
}


//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

`;


html_code_AB_I = `
&ltdiv class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0"&gt
  &ltbutton type="button" class="btn  btn-regular btn-action "&gt 
    &ltsvg class="icon"&gt
        &ltuse [attr.xlink:href]="'#approve'" /&gt
    &lt/svg&gt 
  &lt/button&gt
&lt/div&gt
                          
`;

css_code_AB_I= `
.btn-action{
  border:1px solid $gray-400;
}
`;


html_code_B_Toggle=`
<button type="button" class="btn btn-sm btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
  <div class="handle"></div>
</button>                         
`;

css_code_B_Toggle=`

.jumbotron {
  background: #6b7381;
  color: #bdc1c8;
}
.jumbotron h1 {
  color: #fff;
}
.example {
  margin: 4rem auto;
}
.example > .row {
  margin-top: 2rem;
  height: 5rem;
  vertical-align: middle;
  text-align: center;
  border: 1px solid rgba(189, 193, 200, 0.5);
}
.example > .row:first-of-type {
  border: none;
  height: auto;
  text-align: left;
}
.example h3 {
  font-weight: 400;
}
.example h3 > small {
  font-weight: 200;
  font-size: 0.75em;
  color: #939aa5;
}
.example h6 {
  font-weight: 700;
  font-size: 0.65rem;
  letter-spacing: 3.32px;
  text-transform: uppercase;
  color: #bdc1c8;
  margin: 0;
  line-height: 5rem;
}
.example .btn-toggle {
  top: 50%;
  transform: translateY(-50%);
}
.btn-toggle {
  margin: 0 4rem;
  padding: 0;
  position: relative;
  border: none;
  height: 1.5rem;
  width: 3rem;
  border-radius: 1.5rem;
  color: #6b7381;
  background: #bdc1c8;
}
.btn-toggle:focus,
.btn-toggle.focus,
.btn-toggle:focus.active,
.btn-toggle.focus.active {
  outline: none;
}
.btn-toggle:before,
.btn-toggle:after {
  line-height: 1.5rem;
  width: 4rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  transition: opacity 0.25s;
}
.btn-toggle:before {
  content: "Off";
  left: -4rem;
}
.btn-toggle:after {
  content: "On";
  right: -4rem;
  opacity: 0.5;
}
.btn-toggle > .handle {
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 1.125rem;
  background: #fff;
  transition: left 0.25s;
}
.btn-toggle.active {
  transition: background-color 0.25s;
}
.btn-toggle.active > .handle {
  left: 1.6875rem;
  transition: left 0.25s;
}
.btn-toggle.active:before {
  opacity: 0.5;
}
.btn-toggle.active:after {
  opacity: 1;
}
.btn-toggle.btn-sm:before,
.btn-toggle.btn-sm:after {
  line-height: -0.5rem;
  color: #fff;
  letter-spacing: 0.75px;
  left: 0.4125rem;
  width: 2.325rem;
}
.btn-toggle.btn-sm:before {
  text-align: right;
}
.btn-toggle.btn-sm:after {
  text-align: left;
  opacity: 0;
}
.btn-toggle.btn-sm.active:before {
  opacity: 0;
}
.btn-toggle.btn-sm.active:after {
  opacity: 1;
}
.btn-toggle.btn-xs:before,
.btn-toggle.btn-xs:after {
  display: none;
}
.btn-toggle:before,
.btn-toggle:after {
  color: #6b7381;
}
.btn-toggle.active {
  background-color: $primary;
}
.btn-toggle.btn-lg {
  margin: 0 5rem;
  padding: 0;
  position: relative;
  border: none;
  height: 2.5rem;
  width: 5rem;
  border-radius: 2.5rem;
}
.btn-toggle.btn-lg:focus,
.btn-toggle.btn-lg.focus,
.btn-toggle.btn-lg:focus.active,
.btn-toggle.btn-lg.focus.active {
  outline: none;
}
.btn-toggle.btn-lg:before,
.btn-toggle.btn-lg:after {
  line-height: 2.5rem;
  width: 5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  transition: opacity 0.25s;
}
.btn-toggle.btn-lg:before {
  content: "Off";
  left: -5rem;
}
.btn-toggle.btn-lg:after {
  content: "On";
  right: -5rem;
  opacity: 0.5;
}
.btn-toggle.btn-lg > .handle {
  position: absolute;
  top: 0.3125rem;
  left: 0.3125rem;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  background: #fff;
  transition: left 0.25s;
}
.btn-toggle.btn-lg.active {
  transition: background-color 0.25s;
}
.btn-toggle.btn-lg.active > .handle {
  left: 2.8125rem;
  transition: left 0.25s;
}
.btn-toggle.btn-lg.active:before {
  opacity: 0.5;
}
.btn-toggle.btn-lg.active:after {
  opacity: 1;
}
.btn-toggle.btn-lg.btn-sm:before,
.btn-toggle.btn-lg.btn-sm:after {
  line-height: 0.5rem;
  color: #fff;
  letter-spacing: 0.75px;
  left: 0.6875rem;
  width: 3.875rem;
}
.btn-toggle.btn-lg.btn-sm:before {
  text-align: right;
}
.btn-toggle.btn-lg.btn-sm:after {
  text-align: left;
  opacity: 0;
}
.btn-toggle.btn-lg.btn-sm.active:before {
  opacity: 0;
}
.btn-toggle.btn-lg.btn-sm.active:after {
  opacity: 1;
}
.btn-toggle.btn-lg.btn-xs:before,
.btn-toggle.btn-lg.btn-xs:after {
  display: none;
}
.btn-toggle.btn-sm {
  margin: 0 0.5rem;
  padding: 0;
  position: relative;
  border: none;
  height: 1.5rem;
  width: 3rem;
  border-radius: 1.5rem;
}
.btn-toggle.btn-sm:focus,
.btn-toggle.btn-sm.focus,
.btn-toggle.btn-sm:focus.active,
.btn-toggle.btn-sm.focus.active {
  outline: none;
}
.btn-toggle.btn-sm:before,
.btn-toggle.btn-sm:after {
  line-height: 1.5rem;
  width: 0.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  transition: opacity 0.25s;
}
.btn-toggle.btn-sm:before {
  content: "Off";
  left: -0.5rem;
}
.btn-toggle.btn-sm:after {
  content: "On";
  right: -0.5rem;
  opacity: 0.5;
}
.btn-toggle.btn-sm > .handle {
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 1.125rem;
  background: #fff;
  transition: left 0.25s;
}
.btn-toggle.btn-sm.active {
  transition: background-color 0.25s;
}
.btn-toggle.btn-sm.active > .handle {
  left: 1.6875rem;
  transition: left 0.25s;
}
.btn-toggle.btn-sm.active:before {
  opacity: 0.5;
}
.btn-toggle.btn-sm.active:after {
  opacity: 1;
}
.btn-toggle.btn-sm.btn-sm:before,
.btn-toggle.btn-sm.btn-sm:after {
  line-height: -0.5rem;
  color: #fff;
  letter-spacing: 0.75px;
  left: 0.4125rem;
  width: 2.325rem;
}
.btn-toggle.btn-sm.btn-sm:before {
  text-align: right;
}
.btn-toggle.btn-sm.btn-sm:after {
  text-align: left;
  opacity: 0;
}
.btn-toggle.btn-sm.btn-sm.active:before {
  opacity: 0;
}
.btn-toggle.btn-sm.btn-sm.active:after {
  opacity: 1;
}
.btn-toggle.btn-sm.btn-xs:before,
.btn-toggle.btn-sm.btn-xs:after {
  display: none;
}
.btn-toggle.btn-xs {
  margin: 0 0;
  padding: 0;
  position: relative;
  border: none;
  height: 1rem;
  width: 2rem;
  border-radius: 1rem;
}
.btn-toggle.btn-xs:focus,
.btn-toggle.btn-xs.focus,
.btn-toggle.btn-xs:focus.active,
.btn-toggle.btn-xs.focus.active {
  outline: none;
}
.btn-toggle.btn-xs:before,
.btn-toggle.btn-xs:after {
  line-height: 1rem;
  width: 0;
  text-align: center;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  transition: opacity 0.25s;
}
.btn-toggle.btn-xs:before {
  content: "Off";
  left: 0;
}
.btn-toggle.btn-xs:after {
  content: "On";
  right: 0;
  opacity: 0.5;
}
.btn-toggle.btn-xs > .handle {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.75rem;
  background: #fff;
  transition: left 0.25s;
}
.btn-toggle.btn-xs.active {
  transition: background-color 0.25s;
}
.btn-toggle.btn-xs.active > .handle {
  left: 1.125rem;
  transition: left 0.25s;
}
.btn-toggle.btn-xs.active:before {
  opacity: 0.5;
}
.btn-toggle.btn-xs.active:after {
  opacity: 1;
}
.btn-toggle.btn-xs.btn-sm:before,
.btn-toggle.btn-xs.btn-sm:after {
  line-height: -1rem;
  color: #fff;
  letter-spacing: 0.75px;
  left: 0.275rem;
  width: 1.55rem;
}
.btn-toggle.btn-xs.btn-sm:before {
  text-align: right;
}
.btn-toggle.btn-xs.btn-sm:after {
  text-align: left;
  opacity: 0;
}
.btn-toggle.btn-xs.btn-sm.active:before {
  opacity: 0;
}
.btn-toggle.btn-xs.btn-sm.active:after {
  opacity: 1;
}
.btn-toggle.btn-xs.btn-xs:before,
.btn-toggle.btn-xs.btn-xs:after {
  display: none;
}
.btn-toggle.btn-secondary {
  color: #6b7381;
  background: #bdc1c8;
}
.btn-toggle.btn-secondary:before,
.btn-toggle.btn-secondary:after {
  color: #6b7381;
}
.btn-toggle.btn-secondary.active {
  background-color: #ff8300;
}

`;

}

