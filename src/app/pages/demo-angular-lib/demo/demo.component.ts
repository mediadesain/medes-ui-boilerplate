import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule, MdsNumberUtils, MdsPageManagerModule, PageNavigationConfigInterface, MdsPagerType, SelectedFilterInterface, SelectedFilterSliderInterface }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule, MdsPageManagerModule]
})
export class DemoComponent implements OnInit, AfterContentChecked {
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

   pageNavConfig: PageNavigationConfigInterface = {
      type: MdsPagerType.NUMBERING,
      itemToShow: 8
    }

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
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
