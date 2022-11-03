import { Component  } from '@angular/core';
import { IconsComponent} from '../guidelines/icons.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})




@NgModule({
 
  exports:[
 IconsComponent,
  ],

  declarations: [
    
   IconsComponent
  ]
})
export class LoginComponent {
  login(){}


 }
