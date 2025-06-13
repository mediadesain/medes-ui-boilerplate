import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsPageManagerModule, PageNavigationConfigInterface, MdsPagerType }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

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
<mds-page-navigation [data]="data" [(pageNavConfig)]="pageNavConfig"></mds-page-navigation>`;
pageCounterComponent = `
<!-- Medes Page Counter Component -->
<mds-page-counter [pageCountConfig]="[15, 30, 45, 60, 75]" [(pageNavConfig)]="pageNavConfig"></mds-page-counter>`;

  data: string[] = SampleProductsData.userNames;
  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING,
    itemToShow: 15
    // selectedPage: 1,
    // selectedRange: {
      //   start: 0,
      //   end: 0
    // }
  }

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

}
