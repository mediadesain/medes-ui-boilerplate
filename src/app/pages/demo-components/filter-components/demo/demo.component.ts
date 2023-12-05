import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule, MdsNumberUtils } from 'medes-ui';
import { SelectedFilterInterface, SelectedFilterSliderInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';
// Medes Team Only
// import { MdsFilterModule, MdsHightlightPrismModule, MdsPipesModule, MdsNumberUtils } from 'projects/medes-ui/src/public-api';
// import { SelectedFilterInterface, SelectedFilterSliderInterface } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule]
})
export class DemoComponent implements OnInit, AfterViewInit {
  sampledata: ProductDataModel[] = [];
  colormap = {
      'blue-sky': '#66ccdd',
      'maroon': '#bb6a66',
      'brown': '#6b6a6b',
      'black': '#000000',
      'purple': '#6a66bb',
      'gold': '#b6ab66'
  };
  
  filterSelected: SelectedFilterInterface = {};
  filterRangeSelected: SelectedFilterSliderInterface;

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    const getMinMaxFromData = MdsNumberUtils.getMinMax(SampleProductsData.data.map(item => item.price)); // utils to get min max
    this.filterRangeSelected = {
      min: 0,
      max: 2500,
      start: getMinMaxFromData.min,
      end: getMinMaxFromData.max
    }
    this.sampledata = SampleProductsData.data;
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
