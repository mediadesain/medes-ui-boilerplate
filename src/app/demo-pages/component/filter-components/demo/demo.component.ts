import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/proucts';

@Component({
  selector: 'medes-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  selected = {};
  sampledata = [];
  colormap = {
      'blue-sky': '#66ccdd',
      maroon: '#bb6a66',
      brown: '#6b6a6b',
      black: '#000000',
      purple: '#6a66bb',
      gold: '#b6ab66'
  }

  constructor() { }

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
