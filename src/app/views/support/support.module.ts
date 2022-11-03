


// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { FraudComponent } from './fraud.component';
import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support-routing.module';



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
    SupportRoutingModule,
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
    
    SupportComponent,
    TicketsComponent,FraudComponent
  ],

  declarations: [
    
    SupportComponent,
    TicketsComponent,FraudComponent
  ]
})
export class SupportModule { }



