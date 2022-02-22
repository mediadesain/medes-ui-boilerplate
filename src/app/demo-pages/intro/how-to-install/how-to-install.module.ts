import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToInstallRoutingModule } from './how-to-install-routing.module';
import { HowToInstallComponent } from './how-to-install.component';

import { MdsHightlightPrismModule } from 'medes-ui';
// import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';


@NgModule({
  declarations: [
    HowToInstallComponent
  ],
  imports: [
    CommonModule,
    HowToInstallRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class HowToInstallModule { }
