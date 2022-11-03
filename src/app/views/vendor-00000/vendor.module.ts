


// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { AddvendorComponent } from './addvendor.component';
import { VendorComponent } from './vendor.component';
import { ProductsComponent } from './products.component';
import { SubProductsComponent } from './products/subProducts.component';

// import { ProductsComponent} from './products/products.component';
import { VendorRoutingModule } from './vendor-routing.module';





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
      VendorRoutingModule,
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
    
    AddvendorComponent,
    VendorComponent,ProductsComponent,SubProductsComponent
  ],

  declarations: [
    
    AddvendorComponent,
    VendorComponent,ProductsComponent,SubProductsComponent
  ]
})
export class VendorModule { }



