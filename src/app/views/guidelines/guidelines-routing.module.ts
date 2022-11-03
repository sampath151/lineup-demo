import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent} from './typography.component';
import { IconographyComponent} from './iconography.component';
import { LayoutsComponent} from './layouts.component';
import { AnimationComponent} from './animation.component';
import { ColorComponent } from './color.compoonent';
import{IconsComponent} from './icons.component';
import{FeedbackComponent} from './feedback.compoonent';
import{SpecialcolorsComponent} from './specialcolors.component';





 





const routes: Routes = [
  {
    path: 'guidelines',
    data: {
      title: 'guidelines'
    },
    children: [
      
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'typography'
        }
      },
      {
        path: 'iconography',
        component: IconographyComponent,
        data: {
          title: 'iconography'
        }
      },
      {
        path: 'layouts',
        component: LayoutsComponent,
        data: {
          title: 'layouts'
        }
      },
      {
        path: 'color',
        component: ColorComponent,
        data: {
          title: 'color'
        }
      },

      {
        path: 'specialcolors',
        component: SpecialcolorsComponent,
        data: {
          title: 'specialcolors'
        }
      },
      {
        path: 'animation',
        component: AnimationComponent,
        data: {
          title: 'animation'
        }
      },

      {
        path: 'icons',
        component: IconsComponent,
        data: {
          title: 'icons'
        }
      },

      {
        path: 'feedback',
        component: FeedbackComponent,
        data: {
          title: 'feedback'
        }
      },
      


     
      

      
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule {}




