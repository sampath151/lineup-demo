import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
// import { GetstartModule } from './views/getstart/getstart.module';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AboutComponent } from './views/getstart/about.component';
import { InstallationComponent } from './views/getstart/installation.component';
import {UxbestComponent} from './views/bestpractices/uxbest.component';
// import {IconographyComponent} from './views/design/iconography.component';
import {TypographyComponent} from './views/guidelines/typography.component';
import {ColorComponent} from './views/guidelines/color.compoonent';
import {LayoutsComponent} from './views/guidelines/layouts.component';
import {IconographyComponent} from './views/guidelines/iconography.component';
import {LatestComponent} from './views/whats-new/latest.component'
import { AnimationComponent } from './views/guidelines/animation.component';
import { AccordionComponent } from './views/components/accordion.component';
import { ButtonsComponent} from './views/components/buttons.component';
import { BreadcrumbsComponent} from './views/components/breadcrumbs.component';
import { CheckboxComponent} from './views/components/checkbox.component';
import { EmptystateComponent } from './views/components/emptystate.component';
import { ErrorpageComponent } from './views/components/errorpage.component';
import { InputComponent } from './views/components/input.component';
import { ModalboxComponent } from './views/components/modalbox.component';
import { RadioComponent } from './views/components/radio.component';
import { SelectboxComponent } from './views/components/selectbox.component';
import { FormsComponent} from './views/components/forms.component';
import { introductionComponent} from './views/accessibility/introduction.component';
import { conformanceComponent} from './views/accessibility/conformance.component';
import { screenComponent} from './views/accessibility/screen.component';
import { IconsComponent } from './views/guidelines/icons.component';
import { FeedbackComponent } from './views/guidelines/feedback.compoonent';
import { AssignrolesComponent } from './views/roles/assignroles.component';
import{ SpecialcolorsComponent} from './views/guidelines/specialcolors.component';
import {InboxComponent } from './views/functionalcomponent/inbox.component';
import {SupportComponent} from './views/support/support.component';
import {TicketsComponent} from './views/support/tickets.component';
import {FraudComponent} from './views/support/fraud.component';



// import {ProductsComponent} from './views/vendor/products.component';
// import {SubProductsComponent} from './views/vendor/products/subProducts.component';
// import { HeaderComponent} from './views/components/header.component-0000';
// import { SidenavComponent} from './views/components/sidenav.component';




 const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  // {path:'**', redirectTo:'dashboard'},
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },






  // {
  //   path: 'getstart/about',
  //   component: AboutComponent,
  //   data: {
  //     title: 'about'
  //   }

  // },




  

  // {
  //   path: 'getstart',
  //   // component: GetstartModule,
  //   children:[
  //     {
  //         path: 'getstart',
  //         loadChildren: () => import('./views/getstart/getstart.module').then(m => m.GetstartModule)
  //       },
  //   ]
  // },





  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      // {
      //   path: 'getstart',
      //   loadChildren: () => import('./views/getstart/getstart.module').then(m => m.GetstartModule)
      // },

      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'getstart/about', component: AboutComponent,  data: {title: 'About Lineup'}        
      },
      {
        path: 'getstart/installation', component: InstallationComponent, data: {title: 'Installation'}
      },  
      
           
      {
        path: 'support/support', component: SupportComponent, data: {title: 'support'}
      },  
      
      {
        path: 'support/tickets', component: TicketsComponent, data: {title: 'Tickets'}
      },             
      {
        path: 'support/fraud', component: FraudComponent, data: {title: 'fraud'}
      },  
      

      {
        path: 'guidelines/typography', component: TypographyComponent, data: {title: 'Typography'}
    
      },
      {
        path: 'guidelines/iconography', component: IconographyComponent, data: {title: 'Iconography'}
    
      },
      {
        path: 'guidelines/color', component: ColorComponent,  data: {title: 'Color'}
    
      },
      {
        path: 'guidelines/specialcolors', component: SpecialcolorsComponent, data: {title: 'Special Colors'}
      },
      {
        path: 'guidelines/layouts', component: LayoutsComponent,  data: {title: 'Layouts & Grids'}
    
      },

      {
        path: 'guidelines/icons', component: IconsComponent,  data: {title: 'icons'}
    
      },

      {
        path: 'guidelines/feedback', component: FeedbackComponent,  data: {title: 'feedback'}
    
      },

      {
        path: 'guidlines/animation', component: AnimationComponent,
    
      },
      {
        path: 'whats-new/latest', component: LatestComponent,  data: {title: 'Whats New'}
    
      },
      {
        path: 'components/accordion', component: AccordionComponent, data: {title: 'Accordion'}
    
      },

      {
        path: 'components/breadcrumbs', component: BreadcrumbsComponent,data: {title: 'Breadcrumb'}
    
      },

      {
        path: 'components/checkbox', component: CheckboxComponent, data: {title: 'Checkbox'}
    
      },

      {
        path: 'components/emptystate', component: EmptystateComponent, data: {title: 'Emptystate'}
    
      },

      {
        path: 'components/errorpage', component: ErrorpageComponent, data: {title: 'Error Page'}
    
      },
      {
        path: 'components/input', component: InputComponent, data: {title: 'Input'}
    
      },
      {
        path: 'components/forms', component: FormsComponent, data: {title: 'Forms'}
    
      },
      {
        path: 'components/modalbox', component: ModalboxComponent, data: {title: 'Modal'}
    
      },
      {
        path: 'components/radio', component: RadioComponent, data: {title: 'Radio'}
    
      },

      {
        path: 'components/selectbox', component: SelectboxComponent, data: {title: 'Select box'}
    
      },
      {
        path: 'components/buttons', component: ButtonsComponent, data: {title: 'Buttons'}
    
      },

      {
        path: 'bestpractices/uxbest', component: UxbestComponent, data: {title: 'UX Best Practices'}
    
      },
      {
        path: 'roles/assignroles', component: AssignrolesComponent, data: {title: 'Assiign Roles'}
    
      },
      {
        path: 'functionalcomponents/inbox', component: InboxComponent, data: {title: 'Inbox'}
    
      },
      

      {
        path: 'accessibility/introduction', component: introductionComponent, data: {title: 'Introduction'}
    
      },
      {
        path: 'accessibility/conformance', component: conformanceComponent, data: {title: 'Conformance'}
    
      },
      {
        path: 'accessibility/screen', component: screenComponent, data: {title: 'screen Reader'}
    
      },
      
      
      
      
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {}





