import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdsDocBoilerplateRoutingModule } from './ui-boilerplate-routing.module';
import { MdsDocBoilerplateComponent } from './ui-boilerplate.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { LayoutUtilsComponent } from './layout-utils/layout-utils.component';
import { MdsHightlightPrismModule } from 'medes-ui';
/*-- Medes Team Only --*/
// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [
    MdsDocBoilerplateComponent,
    GridSystemComponent,
    LayoutUtilsComponent,
    ImageLoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdsDocBoilerplateRoutingModule,
    MdsHightlightPrismModule,
  ]
})
export class MdsDocBoilerplateModule { }
