import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignrolesComponent } from './assignroles.component';





const routes: Routes = [
  {
    path: '',
    data: {
      title: 'roles'
    },
    children: [
      
      
      {
        path: 'assignroles',
        component: AssignrolesComponent,
        data: {
          title: 'Assign Roles'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class rolesRoutingModule {}




