import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule, MdsPageManagerModule, MdsModalService, MdsModalModule, MdsPagerType, PageNavigationConfigInterface } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule, MdsPageManagerModule, MdsModalService, MdsModalModule, MdsPagerType, PageNavigationConfigInterface } from 'projects/medes-ui/src/public-api';


@Component({
  selector: 'mds-demo-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsModalModule, MdsPageManagerModule]
})
export class DemoPageNavigationComponent {
  data: string[] = SampleProductsData.userNames;
  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING
  }
  pageNavConfigB: PageNavigationConfigInterface = {
    type: MdsPagerType.STANDARD
  }

importmodule = `
import { NgModule } from '@angular/core';
import { MdsPageManagerModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsPageManagerModule
  ]
})

export class MyModule { }`;

samplecomponent = `
import { Component } from '@angular/core';
import { MdsFilterRangeSliderComponent } from 'medes-ui';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-my-component',
  templateUrl: './mds-my-component.component.html',
  styleUrls: ['./mds-my-component.component.scss']
})

export class MyComponent {
  ...
  data: string[] = SampleProductsData.userNames;
  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING
  }
  pageNavConfigB: PageNavigationConfigInterface = {
    type: MdsPagerType.STANDARD
  }
  ...
}`;

componentdemo = `
Type Standard
<div class="padding-b-1" style="text-align: center;">
    <!-- Demo Medes Page Navigation Component - Type Standard -->
    <mds-page-navigation [data]="data" [(pageNavConfig)]="pageNavConfigB"></mds-page-navigation>
</div>

<!-- Demo Medes Page Navigation Component - Type Pager -->
Type Numbering
<mds-page-navigation [data]="data" [(pageNavConfig)]="pageNavConfig"></mds-page-navigation>`;

condigInterface = `
pageNavConfig: PageNavigationConfigInterface = {
  type: MdsPagerType; // Required, Pager style/type will use normal or pagination
  itemToShow?: number; // Optional (default value is 10). Total item to show
}
    
MdsPagerType {
  STANDARD = 'standard',
  NUMBERING = 'numbering',
}`;

  tableDescription = [
    {attribute: 'data', type: 'Array', default: '∞', description: 'Pharse data items which will be process for page navigation', version: 'medes-ui@1.15.1 >'},
    {attribute: 'pageNavConfig',type: 'PageNavigationConfigInterface', default: '∞', description: 'Configuration of Page Navigation Component', version: 'medes-ui@1.15.1 >'}
  ]

  constructor(public mdsModalService: MdsModalService) {}
  
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
