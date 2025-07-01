import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';
import { HowToInstallComponent } from './how-to-install/how-to-install.component';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@NgModule({
  declarations: [
    IntroductionComponent,
    HowToInstallComponent,
    ColorSchemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IntroductionRoutingModule,
    MdsHightlightPrismModule
  ]
})
export class IntroductionModule { }
