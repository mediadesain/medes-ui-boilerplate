import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterPipe, MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-filter-pipe',
  templateUrl: './demo-filter-pipe.component.html',
  styleUrls: ['./demo-filter-pipe.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule, JsonPipe, MdsFilterPipe]
})
export class DemoFilterPipeComponent {
  item = [];
  params = {
    brand: ['nike', 'puma'],
    category: ['bag'],
    gender: ['women']
  }
  constructor() {
    this.item = SampleProductsData.data;
  }
}
