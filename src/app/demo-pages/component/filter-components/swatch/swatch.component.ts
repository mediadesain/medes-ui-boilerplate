import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'medes-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss']
})
export class SwatchComponent implements OnInit {
componentdemo = `<!-- Filter Swatch Component -->
<mds-filter-swatch
    [titlegroup]="'Filter by Color'"
    [filterData]="sampledata"
    [filterSelected]="selected"
    [swatchMapping]="colormap"
></mds-filter-swatch>`;
  constructor() { }

  ngOnInit(): void {
  }

}
