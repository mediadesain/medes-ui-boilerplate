import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponentsRoutingModule } from './filter-components-routing.module';
import { FilterComponentsComponent } from './filter-components.component';
import { MdsFilterModule } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.module';
import { MdsPipesModule } from 'projects/medes-ui/src/public-api';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { SwatchComponent } from './swatch/swatch.component';
import { ResetAllComponent } from './reset-all/reset-all.component';

// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule } from 'medes-ui';
import { AlertSoonComponent } from 'src/app/shared/components/alert-soon/alert-soon.component';

@NgModule({
  declarations: [
    FilterComponentsComponent,
    CheckboxesComponent,
    SwatchComponent,
    ResetAllComponent,
    AlertSoonComponent
  ],
  imports: [
    CommonModule,
    FilterComponentsRoutingModule,
    MdsHightlightPrismModule,
    MdsFilterModule,
    MdsPipesModule
  ]
})
export class FilterComponentsModule { }
