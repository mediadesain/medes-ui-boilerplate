import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismjsHighlightRoutingModule } from './prismjs-highlight-routing.module';
import { PrismjsHighlightComponent } from './prismjs-highlight.component';

// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule } from 'medes-ui';


@NgModule({
  declarations: [
    PrismjsHighlightComponent
  ],
  imports: [
    CommonModule,
    PrismjsHighlightRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class PrismjsHighlightModule { }
