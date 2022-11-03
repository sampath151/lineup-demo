


// import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { LatestComponent } from './latest.component';
@NgModule({
  imports: [
    CommonModule,
    LatestRoutingModule,
  ],
  exports:[
    
    LatestComponent,
  ],

  declarations: [
    
    LatestComponent,
  ]
})
export class LatestModule { }



