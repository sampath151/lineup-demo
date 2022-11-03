import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';
import { TicketsComponent } from './tickets.component';
import { FraudComponent } from './fraud.component';






const routes: Routes = [
  {
    path: '',
    data: {
      title: 'getstart'
    },
    children: [
      
      
      {
        path: 'support',
        component: SupportComponent,
        data: {
          title: 'support'
        }
      },
      {
        path: 'tickets',
        component: TicketsComponent,
        data: {
          title: 'tickets'
        }
      },
      {
        path: 'fraud',
        component: FraudComponent,
        data: {
          title: 'fraud'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {}




