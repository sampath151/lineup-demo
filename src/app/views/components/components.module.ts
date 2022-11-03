


// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { AccordionComponent} from './accordion.component';
import { BreadcrumbsComponent} from './breadcrumbs.component';
import { ButtonsComponent} from './buttons.component';
import { CheckboxComponent} from './checkbox.component';
import { EmptystateComponent } from './emptystate.component';
import { ErrorpageComponent } from './errorpage.component';
import { InputComponent } from './input.component';
import { ModalboxComponent } from './modalbox.component';
import { RadioComponent } from './radio.component';
import { ComponentRoutingModule } from './components-routing.module';
import { SelectboxComponent } from './selectbox.component';
import { FormsComponent } from './forms.component';
// import { HeaderComponent } from './header.component-0000';
// import { SidenavComponent } from './sidenav.component';




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
    ComponentRoutingModule,
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
    
    AccordionComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
    EmptystateComponent,ErrorpageComponent,InputComponent,ModalboxComponent,RadioComponent,SelectboxComponent,ButtonsComponent,FormsComponent
  ],

  declarations: [
    
    AccordionComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
    EmptystateComponent,ErrorpageComponent,InputComponent,ModalboxComponent,RadioComponent,SelectboxComponent,ButtonsComponent,FormsComponent
    
  ]
})
export class ComponentModule { }



