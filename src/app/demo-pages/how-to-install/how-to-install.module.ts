import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToInstallRoutingModule } from './how-to-install-routing.module';
import { HowToInstallComponent } from './how-to-install.component';


@NgModule({
  declarations: [
    HowToInstallComponent
  ],
  imports: [
    CommonModule,
    HowToInstallRoutingModule
  ]
})
export class HowToInstallModule { }
