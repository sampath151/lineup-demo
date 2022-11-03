


// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { InboxComponent} from './inbox.component';
// import { HeaderComponent } from './header.component-0000';
// import { SidenavComponent } from './sidenav.component';
import { functionalComponentRoutingModule } from './components-routing.module';



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
    functionalComponentRoutingModule,
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
    
    InboxComponent,
  ],

  declarations: [
    
    InboxComponent,
    
  ]
})
export class FunctionalComponentModule { }



