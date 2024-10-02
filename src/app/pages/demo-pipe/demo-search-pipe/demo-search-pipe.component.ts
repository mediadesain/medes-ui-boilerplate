import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule, MdsSearchPipe } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule, MdsSearchPipe } from 'projects/medes-ui/src/public-api';

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
