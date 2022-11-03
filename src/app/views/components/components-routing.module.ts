import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent} from './accordion.component';
import { BreadcrumbsComponent} from './breadcrumbs.component';
import { CheckboxComponent} from './checkbox.component';
import { EmptystateComponent } from './emptystate.component';
import { ErrorpageComponent } from './errorpage.component';
import { InputComponent } from './input.component';
import { ModalboxComponent } from './modalbox.component';
import { RadioComponent } from './radio.component';
import { FormsComponent } from './forms.component';

// import { HeaderComponent } from './header.component-0000';
// import { SidenavComponent } from './sidenav.component';
 





const routes: Routes = [
  {
    path: 'guidelines',
    data: {
      title: 'guidelines'
    },
    children: [
      
      {
        path: 'accordion',
        component: AccordionComponent,
        data: {
          title: 'accordion'
        }
      },
      {
        path: 'Breadcrumbs',
        component: BreadcrumbsComponent,
        data: {
          title: 'Breadcrumbs'
        }
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
        data: {
          title: 'checkbox'
        }
      },
      {
        path: 'emptystate',
        component: EmptystateComponent,
        data: {
          title: 'emptystate'
        }
      },
      {
        path: 'errorpage',
        component: ErrorpageComponent,
        data: {
          title: 'errorpage'
        }
      },
      {
        path: 'input',
        component: InputComponent,
        data: {
          title: 'input'
        }
      },
      {
        path: 'modelbox',
        component: ModalboxComponent,
        data: {
          title: 'modelbox'
        }
      },
      {
        path: 'radio',
        component: RadioComponent,
        data: {
          title: 'radiio'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'forms'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule {}




