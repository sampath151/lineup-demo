import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent} from './inbox.component';

// import { HeaderComponent } from './header.component-0000';
// import { SidenavComponent } from './sidenav.component';
 





const routes: Routes = [
  {
    path: 'functionalcomponents',
    data: {
      title: 'functionalcomponent'
    },
    children: [
      
      {
        path: 'inbox',
        component: InboxComponent,
        data: {
          title: 'inbox'
        }
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class functionalComponentRoutingModule {}




