import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackComponent } from './feedbackform.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    data: {
      title: 'feedback'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class feedbackformRoutingModule {}
