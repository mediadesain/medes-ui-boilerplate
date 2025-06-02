import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule, MdsModalModule, MdsModalService, MdsPageManagerModule, MdsPagerType, PageNavigationConfigInterface } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule, MdsModalModule, MdsModalService, MdsPageManagerModule, MdsPagerType, PageNavigationConfigInterface } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsModalModule, MdsPageManagerModule]
})
export class DemoPageCounterComponent {
  data: string[] = SampleProductsData.userNames;
  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING,
    itemToShow: 15,
    // selectedPage: 1,
    // selectedRange: {
      //   start: 0,
      //   end: 0
    // }
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
    type: MdsPagerType.NUMBERING,
    itemToShow: 15
  }
  ...
}`;

componentdemo = `
<!-- Demo Medes Page Navigation Component -->
<small>Total Item </small>
<mds-page-navigation [data]="data" [(pageNavConfig)]="pageNavConfig" style="background: unset; color: #fff; border: 0;"></mds-page-navigation>`;

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
    {attribute: 'pageNavConfig',type: 'PageNavigationConfigInterface', default: '∞', description: 'Configuration of Page Navigation Component', version: 'medes-ui@1.15.1 >'},
    {attribute: 'class?',type: 'string', default: '∞', description: 'Put your custom class styling', version: 'medes-ui@1.15.1 >'},
    {attribute: 'style?',type: 'string', default: '∞', description: 'Put your custom style directly on element', version: 'medes-ui@1.15.1 >'}
  ]

  constructor(public mdsModalService: MdsModalService) {}

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
