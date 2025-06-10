import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsSearchPipe }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-search-pipe',
  templateUrl: './demo-search-pipe.component.html',
  styleUrls: ['./demo-search-pipe.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule, JsonPipe, MdsSearchPipe]
})
export class DemoSearchPipeComponent implements OnInit {
  item = [];
  params = {
    propertyKey: 'name',
    keyword: 'agnes'
  }
  constructor() { }

  ngOnInit(): void {
    this.item = SampleProductsData.data;
  }
}
