import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsPageManagerModule, PageNavigationManagerModel }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo-navigation-manager',
  templateUrl: './demo-navigation-manager.component.html',
  styleUrls: ['./demo-navigation-manager.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MdsHightlightPrismModule, MdsPageManagerModule]
})
export class DemoNavigationManagerComponent implements AfterContentChecked {

pageNavigationComponent = `
<!-- Medes Page Navigation Component -->
<mds-page-navigation [data]="data" [model]="pageNavModel"></mds-page-navigation>`;
pageCounterComponent = `
<!-- Medes Page Counter Component -->
<mds-page-counter [(model)]="pageNavModel"></mds-page-counter>`;

  data: string[] = SampleProductsData.userNames;
  pageNavModel: PageNavigationManagerModel = {
    configs: {
      itemToShow: 15,
      pageNavigation: {
        // type: 'numbering',
        // color: 'swatch-a'
      },
      pageCounter: {
        options: [15, 30, 45, 60, 75],
      }
    }
  }

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

}
