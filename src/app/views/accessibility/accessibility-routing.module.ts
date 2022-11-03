import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AAccessibilityComponent} from './introduction.component';
import { conformanceComponent} from './conformance.component';
import {introductionComponent} from './introduction.component';
import { screenComponent} from './screen.component';
 





const routes: Routes = [
  {
    path: 'accessibility',
    data: {
      title: 'accessibility'
    },
    children: [
      
      {
        path: 'IntroductionComponent',
        component: introductionComponent,
        data: {
          title: 'Introduction'
        }
      },
      {
        path: 'Conformance',
        component: conformanceComponent,
        data: {
          title: 'Conformance'
        }
      },
      {
        path: 'Screen Reader',
        component: screenComponent,
        data: {
          title: 'Screen Re'
        }
      },
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accessibilityRoutingModule {}




