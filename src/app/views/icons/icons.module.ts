import { NgModule } from '@angular/core';

import { LineIconsComponent } from './lineicons.component';
import { FlagsComponent } from './flags.component';
import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';

import { IconsRoutingModule } from './icons-routing.module';

@NgModule({
  imports: [ IconsRoutingModule ],
  declarations: [
    LineIconsComponent,
    FlagsComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent
  ]
})
export class IconsModule { }
