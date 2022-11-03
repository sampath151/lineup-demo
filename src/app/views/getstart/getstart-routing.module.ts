import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { InstallationComponent } from './installation.component';





const routes: Routes = [
  {
    path: '',
    data: {
      title: 'getstart'
    },
    children: [
      
      
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'about'
        }
      },
      {
        path: 'installation',
        component: InstallationComponent,
        data: {
          title: 'installation'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetstartRoutingModule {}




