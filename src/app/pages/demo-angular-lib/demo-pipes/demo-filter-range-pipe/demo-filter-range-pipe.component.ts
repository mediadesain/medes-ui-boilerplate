import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterRangePipe, MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-filter-range-pipe',
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsFilterRangePipe],
  templateUrl: './demo-filter-range-pipe.component.html',
  styleUrls: ['./demo-filter-range-pipe.component.scss']
})
export class DemoFilterRangePipeComponent implements OnInit {
  item: ProductDataModel[];
  params: {propertyKey: string, range: {start: number, end: number}};

  constructor() { }

  ngOnInit(): void {
    this.params = {
      propertyKey: 'price',
      range: { start: 500, end: 1000 }
    }
    this.item = SampleProductsData.data;
  }

}
