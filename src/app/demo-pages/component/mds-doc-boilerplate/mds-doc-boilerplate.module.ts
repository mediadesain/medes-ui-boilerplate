import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdsDocBoilerplateRoutingModule } from './mds-doc-boilerplate-routing.module';
import { MdsDocBoilerplateComponent } from './mds-doc-boilerplate.component';

import { MdsHightlightPrismModule } from 'medes-ui';
// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [
    MdsDocBoilerplateComponent
  ],
  imports: [
    CommonModule,
    MdsDocBoilerplateRoutingModule,
    MdsHightlightPrismModule,
  ]
})
export class MdsDocBoilerplateModule { }
