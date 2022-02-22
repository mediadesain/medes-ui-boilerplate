import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'medes-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss']
})
export class GridSystemComponent implements OnInit {
  sampledata: any[];
  constructor() { }

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
