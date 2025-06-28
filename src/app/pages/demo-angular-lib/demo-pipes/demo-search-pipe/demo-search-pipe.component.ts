import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsSearchPipe }
//*-public-mode-*/ from 'medes-ui-angular';
/*-dev-mode-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo-search-pipe',
  templateUrl: './demo-search-pipe.component.html',
  styleUrls: ['./demo-search-pipe.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule, JsonPipe, MdsSearchPipe]
})
export class DemoSearchPipeComponent {
  item = [];
  params = {
    propertyKey: 'name',
    keyword: 'agnes'
  }
  constructor() {
    this.item = SampleProductsData.data;
  }
  
}
