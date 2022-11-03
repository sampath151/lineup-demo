import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FeedbackComponent } from './feedbackform.component';
import { feedbackformRoutingModule } from './feedback-routing.module';



@NgModule({
  imports: [
    feedbackformRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ FeedbackComponent ]
})
export class WidgetsModule { }
