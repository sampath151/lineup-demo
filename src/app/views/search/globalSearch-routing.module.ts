
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UxbestComponent} from './globalSearch.component';



const routes: Routes = [
    {
      path: 'bestpractices',
      data: {
        title: 'bestpractices'
      },
      children: [
        
        {
          path: 'uxbest',
          component: UxbestComponent,
          data: {
            title: 'ux best'
          }
        },
      ]
    }
  ];
  
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UxbestRoutingModule {}
  
  
  