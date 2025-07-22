import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterRangePipe, MdsHightlightPrismModule }
/*-private-*/ from '@medes-ui/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
    selector: 'mds-demo-filter-range-pipe',
    templateUrl: './demo-filter-range-pipe.component.html',
    styleUrls: ['./demo-filter-range-pipe.component.scss'],
    imports: [CommonModule, MdsHightlightPrismModule, MdsFilterRangePipe]
})
export class DemoFilterRangePipeComponent {
  item: ProductDataModel[];
  params: {propertyKey: string, range: {start: number, end: number}};

  constructor() {
    this.params = {
      propertyKey: 'price',
      range: { start: 500, end: 1000 }
    }
    this.item = SampleProductsData.data;
  }

}
