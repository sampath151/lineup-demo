


// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { TypographyComponent } from './typography.component';
import { IconographyComponent } from './iconography.component';
import { ColorComponent } from './color.compoonent';
import { LayoutsComponent } from './layouts.component';
import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { AnimationComponent } from './animation.component';
import {IconsComponent} from './icons.component';
import {FeedbackComponent} from './feedback.compoonent';
import {SpecialcolorsComponent} from './specialcolors.component'



import {SvgIconComponent} from './svg-icon.component';


// import { IconsModule } from "./icon.module";
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  imports: [
    CommonModule,
    GuidelinesRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports:[
    
    TypographyComponent,
    IconographyComponent,ColorComponent,FeedbackComponent,SpecialcolorsComponent,
    LayoutsComponent,AnimationComponent,IconsComponent,SvgIconComponent,
  ],

  declarations: [
    
    TypographyComponent,
    LayoutsComponent,ColorComponent,FeedbackComponent,SpecialcolorsComponent,
    IconographyComponent,AnimationComponent,IconsComponent,SvgIconComponent,
  ]
})
export class GuidelinesModule { }







// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
