import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestComponent} from './latest.component';






const routes: Routes = [
  {
    path: 'whats-new',
    data: {
      title: 'whats new'
    },
    children: [
      
      {
        path: 'latest',
        component: LatestComponent,
        data: {
          title: 'latest'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class whatsnewRoutingModule {}




